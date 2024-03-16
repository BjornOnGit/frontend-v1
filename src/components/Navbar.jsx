import logo from "../assets/icons/Vector.svg"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-10 w-4/5 m-auto">
            <img src={logo} alt="" />
            <div className="flex items-center justify-between gap-8 text-xl font-medium">
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Pharmacy</span>
            <span>Laboratory</span>
            <span className="text-[#fff] bg-gradient-to-r from-[#29E189] from-10% to-[#00A3FF] to-90% ... px-7 py-3 rounded-3xl cursor-pointer">Book Appointment</span>
            </div>
        </div>
    )
}

export default Navbar