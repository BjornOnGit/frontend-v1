import ellipse from '../../images/Ellipse 13.png';
import circle from '../../images/Ellipse 15.png';
import logo from '../../assets/icons/Vector.svg';
import wing from '../../images/pngwing 2.png';
import rectangle from '../../images/Rectangle 33.png';
import halfellipse from '../../images/HalfEllipse 14.png';
import { useNavigate } from 'react-router-dom';

// ============= Icons ===============
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoPersonOutline } from 'react-icons/io5';
import { FaPen } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSnapchat } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

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
            At virtuDoc we make healthcare easier and more transparent,
            empowering you to make decisions based on information not just
            instinct. You can rest easy knowing you and your family are
            receiving high quality care.
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
            <p className='my-12 text-xl leading-normal'>
              Learn about different health conditions and how you can live a
              healthy life. At virtuDoc we make healthcare easier and more
              transparent, empowering you to make decisions based on information
              not just instinct. You can rest easy knowing you and your family
              are receiving high quality care.
            </p>
            <button
              className='px-10 py-4 uppercase text-[#fff] cursor-pointer border-none font-medium rounded-xl text-xl bg-[#29E189] w-max'
              onClick={() => navigate('/book-now')}
            >
              Book now
            </button>
          </div>

          <div>
            <img src={rectangle} alt='' />
          </div>
        </div>
      </div>

      {/* ====================== Section 3 ================== */}
      <div className='w-5/12 m-auto mt-12'>
        <div className='flex justify-between items-center '>
          <div className='border border-[#D9D9D9]'></div>
          <div className='uppercase text-3xl font-semibold'>How It Works</div>
          <div></div>
        </div>
        <div className='text-center text-xl leading normal mt-8'>
          Patients satisfaction is our priority. Our patients can take advantage
          of our user-friendly interface with hands on help & step by step
          guidance links. User experience surveys at the end of the consultation
          helps patients to share their experience with us.
        </div>
      </div>

      {/* ================== Third Section ================= */}
      <div className='mt-12 p-10 bg-[#FFCCFD]'>
        <div className='w-8/12 m-auto flex justify-between items-center'>
          <div className='flex flex-col justify-between items-center gap-4 text-center w-3/12'>
            <FaRegCircleCheck size={20} />
            <div className='text-xl'>
              Complete online registration to get in touch with our medical
              personnel.
            </div>
          </div>

          <div className='flex flex-col justify-between items-center gap-4 text-center w-3/12'>
            <IoPersonOutline size={20} />
            <div className='text-xl'>
              Have a virtual one on one session with our personnel regarding any
              medical issues.
            </div>
          </div>

          <div className='flex flex-col justify-between items-center gap-4 text-center w-3/12'>
            <FaPen size={20} />
            <div className='text-xl'>
              Get prescriptions or get referred to a laboratory for testing.
            </div>
          </div>
        </div>
      </div>

      {/* =================== Last Section ==================== */}
      <div className='flex justify-between items-center w-9/12 m-auto my-8'>
        <div className='flex flex-col justify-start gap-2 items-center text-start'>
          <img src={logo} alt='' />
          <div className='text-base font-semibold'>Ready to serve</div>
        </div>

        <div className='uppercase text-base flex flex-col justify-start items-center text-start'>
          <h2 className='font-semibold mb-2'>Help</h2>
          <span>Faqs</span>
          <span>Health Care</span>
          <span>Lab locations</span>
        </div>

        <div className='uppercase text-base flex flex-col justify-start items-center text-start'>
          <h2 className='font-semibold mb-2'>Services</h2>
          <span>Child Birth Control</span>
          <span>Covid-19 Vaccines</span>
          <span>Download our apps</span>
        </div>

        <div className='uppercase flex flex-col text-base justify-start items-center text-start'>
          <h2 className='font-semibold mb-2'>About Virtudoc</h2>
          <span>Careers</span>
          <span>Latest News</span>
        </div>

        <div className='flex flex-col text-base justify-start items-center text-start'>
          <h2 className='font-semibold uppercase mb-2'>Contact Us</h2>
          <span>info@virtudoc.com</span>
        </div>
      </div>

      {/* ================= Footer =================== */}
      <div className='bg-[#CAF2FF]'>
        <div className='flex justify-between items-center gap-4 w-10/12 m-auto py-3'>
          <div className='flex justify-center items-center text-start'>
            <span className='text-lg font-medium capitalize border-r border-[#D9D9D9] px-2'>
              2023 Copyright:VirtuDoc
            </span>

            <span className='text-lg font-medium capitalize border-r border-[#D9D9D9] px-2'>
              Site Map
            </span>

            <span className='text-lg font-medium capitalize border-r border-[#D9D9D9] px-2'>
              Legal & Privacy
            </span>

            <span className='text-lg font-medium capitalize px-2'>Cookies</span>
          </div>

          <div className='flex justify-start items-center gap-6'>
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
            <FaLinkedin />
            <FaSnapchat />
            <HiOutlineMail />
          </div>
        </div>
      </div>
    </div>
  );
}
