import { useForm } from 'react-hook-form';

import doctorImg from '../../assets/images/doctor.png';
import useBookAppointment from './useBookAppointment';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function BookAppointment() {
  const { bookAppointment, bookAppointmentLoading } = useBookAppointment();
  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service_selected: data.service_selected,
      scheduled_date: data.scheduled_date,
      scheduled_time: data.scheduled_time,
    };
    bookAppointment(payload, {
      onSuccess: (data) => {
        navigate('/patient-info');
        reset();
        toast.success(data.message);
      },
    });
  };

  return (
    <section className='w-full h-full min-h-screen px-6 md:px-[6rem] py-[3.4rem] bg-opacity-85 flex bg-hospitalBg flex-col md:flex-row justify-between items-center bg-cover bg-no-repeat overflow-hidden'>
      <div className='flex-[40%]'>
        <h2 className='text-[4.8rem] bg-gradient-to-tr from-green-900 to-blue-900 text-transparent bg-clip-text font-bold mb-[1.5rem]'>
          Book Your Visit At VirtuDoc
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-1 md:grid-cols-2 gap-x-[3.2rem] gap-y-[3rem]'
        >
          <fieldset className='col-span-2 md:col-span-1'>
            <label htmlFor='name' className='text-[2rem]'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Umeh Promise'
              {...register('name', { required: 'This field is required' })}
              className='h-[4rem] w-full px-2 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.name?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2  md:col-span-1'>
            <label htmlFor='phone' className='text-[2rem]'>
              Phone Number
            </label>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='08142407972'
              {...register('phone', {
                required: 'This field is required',
              })}
              className='h-[4rem] w-full px-2 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.phone?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2'>
            <label htmlFor='email' className='text-[2rem]'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='umehpromise1000@gmail.com'
              {...register('email', { required: 'This field is required' })}
              className='h-[4rem] w-full px-2 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.email?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2 md:col-span-1'>
            <label htmlFor='date' className='text-[2rem]'>
              Select Date
            </label>
            <input
              type='date'
              name='date'
              id='date'
              placeholder='14-02-2024'
              {...register('date', { required: 'This field is required' })}
              className='h-[4rem] w-full px-2 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.date?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2  md:col-span-1'>
            <label htmlFor='time' className='text-[2rem]'>
              Select Time
            </label>
            <input
              type='time'
              name='time'
              id='time'
              placeholder='00:00:00'
              {...register('time', {
                required: 'This field is required',
              })}
              className='h-[4rem] w-full px-2 border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.time?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2'>
            <label htmlFor='service_selected' className='text-[2rem]'>
              Select Service
            </label>
            <select
              className='h-[4rem] w-full px-2 border-grey-900 border bg-grey-800 rounded-md'
              name='service_selected'
              id='service_selected'
              {...register('service_selected', {
                required: 'This field is required',
              })}
            >
              <option value=''>---Select---</option>
              <option value='urgent'>Consultation(Urgent)</option>
              <option value='urgent'>Consultation(Checkup)</option>
            </select>
            <span className='text-red-900 text-xl'>
              {errors?.service_selected?.message}
            </span>
          </fieldset>

          <button
            className='col-span-2 w-fit place-self-center uppercase px-[1.8rem] md:px-[2.2rem] py-[1rem] md:py-[1.2rem] bg-green-900 rounded-[1rem] text-[1.4rem] md:text-[1.6rem] font-semibold text-white '
            disabled={bookAppointmentLoading}
          >
            {bookAppointmentLoading ? 'Booking...' : 'Book now'}
          </button>
        </form>
      </div>
      <div className='hidden flex-[60%] lg:flex items-end justify-end '>
        <div className='w-[56.6rem] h-[62.3rem] absolute bottom-0 right-0'>
          <img src={doctorImg} alt='doctor_image' className='size-full' />
        </div>
      </div>
    </section>
  );
}
