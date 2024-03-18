import { useForm } from 'react-hook-form';
import usePatientInfo from './usePatientInfo';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PatientInfo = () => {
  const { patientInfo, patientInfoLoading } = usePatientInfo();
  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      age: data.age,
      weight: data.weight,
      height: data.height,
      state: data.state,
      temperature: data.temperature,
      blood_pressure: data.bloodPressure,
      medical_history: data.medical_history,
    };
    patientInfo(payload, {
      onSuccess: (data) => {
        navigate('/chat');
        reset();
        toast.success(data.message);
      },
    });
  };
  return (
    <div className='px-5 md:px-24 mt-20 mb-5 md:mb-0 '>
      <h2 className=' text-4xl'>Patient info</h2>
      <div className='w-full md:h-[calc(100vh-300px)] flex justify-center flex-col mt-10 bg-grey-800 shadow-blue-900 shadow rounded-[32px] p-10 py-20'>
        <p>
          To help us serve you better, please provide the following details{' '}
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-1 md:mt-20 md:grid-cols-3 gap-x-[3.2rem] gap-y-[3rem]'
        >
          <fieldset className='col-span-2 md:col-span-1'>
            <label htmlFor='age' className='text-[2rem]'>
              Age
            </label>
            <input
              type='text'
              name='age'
              id='age'
              placeholder='5 yrs'
              {...register('age', { required: 'This field is required' })}
              className='h-[4rem] w-full px-5 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>{errors?.age?.message}</span>
          </fieldset>
          <fieldset className='col-span-2  md:col-span-1'>
            <label htmlFor='weight' className='text-[2rem]'>
              Weight <span className=' text-grey-700 text-[1.5rem]'>kg</span>
            </label>
            <input
              type='text'
              name='weight'
              id='weight'
              placeholder='12Kg'
              {...register('weight', {
                required: 'This field is required',
              })}
              className='h-[4rem] w-full px-5 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.weight?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2 md:col-span-1'>
            <label htmlFor='height' className='text-[2rem]'>
              Height <span className=' text-grey-700 text-[1.5rem]'>In</span>
            </label>
            <input
              type='text'
              name='height'
              id='height'
              placeholder='12In'
              {...register('height', { required: 'This field is required' })}
              className='h-[4rem] w-full px-5 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.height?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2 md:col-span-1'>
            <label htmlFor='state' className='text-[2rem] '>
              State
            </label>
            <input
              type='text'
              name='state'
              id='state'
              placeholder='anambra'
              {...register('state', { required: 'This field is required' })}
              className='h-[4rem] w-full px-5 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.state?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2  md:col-span-1'>
            <label htmlFor='temperature' className='text-[2rem]'>
              Temperature{' '}
              <span className=' text-grey-700 text-[1.5rem]'>{'°C'}</span>
            </label>
            <input
              type='text'
              name='temperature'
              id='temperature'
              placeholder='10'
              {...register('temperature', {
                required: 'This field is required',
              })}
              className='h-[4rem] w-full px-5 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.temperature?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2 md:col-span-1'>
            <label htmlFor='bloodPressure' className='text-[2rem]'>
              Blood Pressure
            </label>
            <input
              type='text'
              name='bloodPressure'
              id='bloodPressure'
              placeholder='10'
              {...register('bloodPressure', {
                required: 'This field is required',
              })}
              className='h-[4rem] w-full px-5 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.bloodPressure?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-3'>
            <label htmlFor='service_selected' className='text-[2rem]'>
              History
              <span className=' text-grey-700'>
                {' '}
                (Please include your Personal and Family Medical History)
              </span>
            </label>
            <select
              className='h-[4rem] w-full px-5 border-grey-900 border bg-grey-800 rounded-md'
              name='medical_history'
              id='medical_history'
              {...register('medical_history', {
                required: 'This field is required',
              })}
            >
              <option value=''>---Select---</option>
              <option value='malaria'>Malaria</option>
              <option value='asthma'>Asthma</option>
              <option value='diabetics'>Diabetics</option>
              <option value='high-blood-pressure'>High Blood Pressure</option>
              <option value='cancer'>Cancer</option>
              <option value='sickle-cell'>Sickle cell</option>
              <option value='heart-disease'>Heart Disease</option>
              <option value='others'>Others</option>
            </select>
            <span className='text-red-900 text-xl'>
              {errors?.service_selected?.message}
            </span>
          </fieldset>

          <button
            className='col-span-3 w-fit place-self-center uppercase px-[1.8rem] md:px-[2.2rem] py-[1rem] md:py-[1.2rem] bg-green-900 rounded-[1rem] text-[1.4rem] md:text-[1.6rem] font-semibold text-white '
            disabled={patientInfoLoading}
          >
            {patientInfoLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientInfo;
