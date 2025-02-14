import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../index.css';
import logo from '../images/Lebed_healthways_logo-removebg-preview (4).png';

export default function TopNavigationbar() {
  const [sticky, setSticky] = useState(false);

  // Properly handling scroll event
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-[50px] flex justify-center items-center bg-[#aca9bb] shadow-md z-10 transition-all duration-300 ${
        sticky ? 'shadow-lg' : 'bg-[#aca9bb]'
      }`}
    >
      <nav className="w-full max-w-[1200px] px-4">
        <ul className="flex justify-between items-center w-full">
          {/* Left Section - Navigation Links */}
          <ul className="flex space-x-8">
            <li className="text-white font-semibold list-none cursor-pointer hover:text-[#612d2b] transition duration-300">
              <Link to="values" smooth={true} duration={500}>
                Values
              </Link>
            </li>
            <li className="text-white font-semibold list-none cursor-pointer hover:text-[#612d2b] transition duration-300">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li className="text-white font-semibold list-none cursor-pointer hover:text-[#612d2b] transition duration-300">
              <Link to="mission" smooth={true} duration={500}>
                Mission
              </Link>
            </li>
          </ul>

          {/* Center - Logo */}
          <li className="flex justify-center">
            <img src={logo} alt="logo" className="lg:w-[200px] sm:w-[100px] postion-fit bg-cover" />
          </li>

          {/* Right Section - Navigation Links & Contact Button */}
          <ul className="flex space-x-8">
            <li className="text-blue font-semibold list-none px-4 py-2 bg-white rounded-lg cursor-pointer hover:bg-[#612d2b] hover:text-white transition duration-300">
              <Link to="contact_us" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}
