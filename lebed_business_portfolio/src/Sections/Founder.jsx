import React from 'react'
import founder_profile from '../images/founder.jpg'
import '../Styles/body.css'

export default function FounderSection() {
  return (
    <div className="">
    {/* <Section_titles title={"About the founder"} class="absolute  top-0 left-0" /> */}
    <div className="mt-[10px] lg:w-[80%] h-auto flex flex-col sm:flex-row sm:h-auto justify-center items-center rounded-md shadow-lg text-[#CA5050] sm:w-[100%] p-4">
      <img
        src={founder_profile}
        alt="founder profile"
        className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] p-[5px] rounded-full"
      />
      <div className="text-container mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <p className="leading-5 lg:text-[20px] sm:text-[14px] text-[12px] my-3">
          <span className="px-[10px] font-bold">Stella Kanyori</span>
          is the visionary founder and CEO of Lebed Healthways. She is a highly
          skilled and passionate physiotherapist with extensive experience in
          promoting health and wellness. With a career spanning 4 years, she has
          dedicated herself to helping individuals recover, thrive, and achieve
          their physical potential.
        </p>
      </div>
    </div>
  </div>
  
  )
}
