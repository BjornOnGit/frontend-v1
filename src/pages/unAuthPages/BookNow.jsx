import { useForm } from 'react-hook-form';

import doctorImg from '../../assets/images/doctor.png';

export default function BookNow() {
  const {
    register,
    // reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // reset()
    console.log(data);
  };

  return (
    <section
      className={`w-full h-full px-[10rem] py-[3.4rem] bg-opacity-85 flex bg-[url('./src/assets/images/hospital.png')] justify-between items-center bg-cover bg-no-repeat `}
    >
      <div className='flex-[40%]'>
        <h2 className='text-[4.8rem] bg-gradient-to-tr from-green-900 to-blue-900 text-transparent bg-clip-text font-bold mb-[1.5rem]'>
          Book Your Visit At VirtuDoc
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-x-[3.2rem] gap-y-[3rem]'
        >
          <fieldset>
            <label htmlFor='name' className='text-[2rem]'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              {...register('name', { required: 'This field is required' })}
              className='h-[4rem] w-full border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.name?.message}
            </span>
          </fieldset>
          <fieldset>
            <label htmlFor='phoneNumber' className='text-[2rem]'>
              Phone Number
            </label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              {...register('phoneNumber', {
                required: 'This field is required',
              })}
              className='h-[4rem] w-full border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.phoneNumber?.message}
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
              {...register('email', { required: 'This field is required' })}
              className='h-[4rem] w-full border-grey-900 border bg-grey-800 rounded-md'
            />
            <span className='text-red-900 text-xl'>
              {errors?.email?.message}
            </span>
          </fieldset>
          <fieldset className='col-span-2'>
            <label htmlFor='service' className='text-[2rem]'>
              Select Service
            </label>
            <select
              className='h-[4rem] w-full border-grey-900 border bg-grey-800 rounded-md'
              name='service'
              id='service'
              {...register('service', { required: 'This field is required' })}
            >
              <option value=''></option>
            </select>
            <span className='text-red-900 text-xl'>
              {errors?.service?.message}
            </span>
          </fieldset>

          <button className='col-span-2 w-fit place-self-center uppercase px-[2.4rem] py-[1.4rem] bg-green-900 rounded-[1rem] text-white text-[2rem] font-semibold '>
            Book now
          </button>
        </form>
      </div>
      <div className='flex-[60%] flex items-end justify-end'>
        <div className='w-[56.6rem] h-[62.3rem]'>
          <img src={doctorImg} alt='doctor_image' className='size-full' />
        </div>
      </div>
    </section>
  );
}
