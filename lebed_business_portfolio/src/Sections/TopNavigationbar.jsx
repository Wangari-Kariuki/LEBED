import { useEffect, useState,  React  }from 'react';
import { Link } from 'react-scroll';
import '../index.css';
import AboutSection from './About';

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
    <div className="fixed top-0 w-full bg-[#aca9bb] h-[50px] flex justify-center items-center shadow-md z-0">
      <nav className="w-full max-w-[1200px] px-4">
        <ul className="flex justify-between items-center w-full">
          {/* Left Section - Navigation Links */}
          <div className="flex space-x-8">
            <li onclick={ (<AboutSection/>)}  className="text-white font-semibold list-none cursor-pointer hover:text-[#612d2b] transition duration-300">
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
          </div>

          {/* Right Section - Contact Button */}
          <li className="text-blue font-semibold list-none px-4 py-2 bg-white rounded-lg cursor-pointer hover:bg-[#612d2b] hover:text-white transition duration-300">
            <Link to="contact_us" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
