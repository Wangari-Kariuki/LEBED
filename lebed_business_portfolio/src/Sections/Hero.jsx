import React from 'react';
import '../index.css';
import '../Styles/Hero.css';
import logo from '../images/Lebed_healthways_logo-removebg-preview (1).png';

export default function HeroSection() {
  return (
    <div className="hero h-[100%] flex justify-center items-center   relative">
      <img className=" hidden lg:inline w-[500px] absolute lg:left-20 " src={logo} alt="Lebed Healthways Logo" />
      <div className=" pt-[35%] mb-[20%] flex flex-col items-center text-center">
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
      {/* <img className="w-[500px] absolute right-20 sm:hidden md:block" src={logo} alt="Lebed Healthways Logo" /> */}
    </div>
  );
}
