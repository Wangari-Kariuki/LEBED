import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../index.css';

export default function TopNavigationbar() {
  const Servicesref = useRef(null);
  const missionref = useRef(null);
  const valuesref = useRef(null);
  const contact_ussref = useRef(null);

    const sectionRefs = {
      Services: Servicesref,
      mission: missionref,
      values: valuesref,
      contact_us: contact_ussref,
    };
    sectionRefs[sectionRefs]?.current.scrollIntoView({ behavior: 'smooth' });


  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div className='fixed top-0 w-full bg-[#aca9bb] h-[50px]'>
      <nav
        className={`container ${
          sticky ? 'bg-[#212EA0]' : 'bg-[#aca9bb]'
        } shadow-md pl-[25%] rounded-lg transition duration-300`}
      >
        <ul className='p-[10px]'>
  <li className='inline-block text-white font-semibold text-shadow-md list-none pr-[40px] ml-[20px] cursor-pointer hover:text-[#612d2b] transition duration-300'>
            <Link to='values' smooth={true} duration={500} className='cursor-pointer'>
              Values
            </Link>
          </li>
          <li className='inline-block text-white font-semibold text-shadow-md list-none pr-[40px] ml-[20px]  cursor-pointer hover:text-[#612d2b] transition duration-300'>
            <Link to='services' smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li className='inline-block text-white font-semibold text-shadow-md list-none pr-[40px] ml-[20px] cursor-pointer hover:text-[#612d2b] transition duration-300'>
            <Link to='mission' smooth={true} duration={500}>
              Mission
            </Link>
          </li>
          <li className='inline-block text-blue font-semibold text-shadow-md list-none p-[10px] bg-white rounded-lg float-right cursor-pointer hover:bg-[#612d2b] hover:text-white transition duration-300'>
            <Link to='contact_us' smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
