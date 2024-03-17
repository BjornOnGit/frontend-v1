import ellipse from '../../images/Ellipse 13.png';
import circle from '../../images/Ellipse 15.png';
import wing from '../../images/pngwing 2.png';
import rectangle from '../../images/Rectangle 33.png';
import halfellipse from '../../images/HalfEllipse 14.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='h-screen'>
      {/* ========== Body ========== */}
      <div className='flex justify-between items-center mt-36 w-10/12 m-auto'>
        {/* =========== Body Text =========== */}
        <div className='w-[70%]'>
          <h1 className='font-bold uppercase text-7xl leading-normal'>
            READY TO SERVE. <br />
            EXCELLENT HEALTH <br />
            CARE, CLOSE TO HOME
          </h1>
          <h3 className='text-xl w-7/12 mt-6 mb-8 leading-normal '>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas.
          </h3>
          <div className='flex justify-start items-center gap-12'>
            <button
              className='text-xl border-none px-10 py-4 rounded-xl font-medium cursor-pointer uppercase text-[#fff] bg-[#29E189]'
              onClick={() => navigate('/book-now')}
            >
              Book Now
            </button>
            <button
              className='text-xl border border-[#29E189] px-10 py-4 font-medium rounded-xl uppercase cursor-pointer text-[#29E189] bg-[#fff]'
              onClick={() => navigate('/book-appointment')}
            >
              Schedule Later
            </button>
          </div>
        </div>

        {/* ============== Body Image ================== */}
        <div>
          <div className='relative'>
            <img
              src={ellipse}
              alt=''
              className='absolute top-[14%] left-[2%] w-2/12 -z-10'
            />
            <img src={circle} alt='' className='top-0 left-0 w-[100%] z-20' />
            <img
              src={halfellipse}
              alt=''
              className='absolute bottom-[37%] -right-[5%] w-2/12 -z-10'
            />
            <img
              src={wing}
              alt=''
              className='absolute top-[3%] left-[15%] w-8/12 z-10'
            />
          </div>
        </div>
      </div>

      {/* ================ Section 2 ================== */}
      <div className='mt-60 p-10 bg-[#CAF2FF]'>
        <div className='flex justify-between items-center gap-2 w-10/12 m-auto'>
          <div className='w-6/12'>
            <h1 className='text-4xl font-semibold capitalize'>Discover</h1>
            <div className='my-12 text-xl leading-normal'>
              Learn about different health conditions and how you can live a
              healthy life ...At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti atque
              corrupti quos dolores et quas.
            </div>
            <div className='px-10 py-4 uppercase text-[#fff] cursor-pointer border-none font-medium rounded-xl text-xl bg-[#29E189] w-max'>
              Learn More
            </div>
          </div>

          <div>
            <img src={rectangle} alt='' />
          </div>
        </div>
      </div>

      {/* ====================== Section 3 ================== */}
      <div className='w-5/12 m-auto mt-8 '>
        <div className='flex justify-between items-center '>
          <div className='p-0 border border-[#D9D9D9]'></div>
          <div className='uppercase text-4xl font-medium'>How It Works</div>
          <div></div>
        </div>
        <div className='text-center text-xl leading normal mt-8'>
          Patients satisfaction is our priority. Our patients can take advantage
          of our user-friendly interface with hands on help & step by step
          guidance links. User experience surveys at the end of the consultation
          helps patients to share their experience with us.
        </div>
      </div>
    </div>
  );
}
