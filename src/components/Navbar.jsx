import { Link } from 'react-router-dom';
import logo from '../assets/icons/Vector.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-10 w-4/5 m-auto py-6'>
      <Link to='/'>
        <img src={logo} alt='' />
      </Link>
      <div className='flex items-center justify-between gap-8 text-xl font-medium'>
        <Link to='/'>Home</Link>
        <Link to='/'>About Us</Link>
        <Link to='/'>Services</Link>
        <Link to='/'>Pharmacy</Link>
        <Link to='/'>Laboratory</Link>
        <Link
          to='/book-appointment'
          className='text-[#fff] bg-gradient-to-r from-[#29E189] from-10% to-[#00A3FF] to-90% ... px-7 py-3 rounded-3xl cursor-pointer'
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
