import React from 'react';
import '../index.css';
import '../Styles/Hero.css';
import logo from '../images/Lebed_healthways_logo-removebg-preview (1).png';

export default function HeroSection() {
  return (
    <div className="hero h-[600px] flex justify-center items-center  border-b border-[#695b5b] relative">
      <img className="w-[500px] absolute  left-20" src={logo} alt="Lebed Healthways Logo" />
      <div className="mt-[5%] flex flex-col items-center text-center">
        <div className="title_hero p-5 relative flex flex-col items-center">
          <h1 className="font-roboto text-[70px] text-white ">LEBED</h1>
          <h2 className="text-white text-[70px] font-semibold">HEALTHWAYS</h2>

        </div>
        <div className="slogan">
          <p className="text-sm p-[30px] lg:text-[50px] leading-10 sm:w-full text-white">
            Quality care begins at home
          </p>
          
        </div>
      </div>
      <img className="w-[500px] absolute  right-20" src={logo} alt="Lebed Healthways Logo" />
    </div>
  );
}
