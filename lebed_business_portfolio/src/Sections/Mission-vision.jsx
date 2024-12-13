import React from 'react'
import about_image from '../images/Untitled design (4).png'
export default function Mission_vision() {
  return (
    <div>

<div className='mission_vision'>
        <img src={about_image} alt = "image 1" class = "w-[400px] h-[auto] p-[10px]"/>
        <div className ='text-container'>
      <h1 class = "px-[24px]  text-500-red">Our mission</h1>
      <p>
      Our vision is to be a leading home-based care provider,
       recognized for our commitment to excellence and innovation. 
       We strive to create a world where every individual receives the support they need to live fulfilling, 
       independent lives at home. By fostering a culture of empathy and respect, we aim to empower our clients and their families,
        ensuring that care is accessible, personalized, and aligned with their values and aspirations. 
      We aspire to be a trusted partner in promoting health, happiness, and dignity.
      </p>
      </div>
      </div>
      
      <div className='objectives'>
        <ul>
          <li>
          <p>at least <span>   125+</span></p>
          </li>

          <li>
          <p><span>   75%</span> client satistfaction</p>
          </li>

          <li>
          <p>Profitability within <span>  1.5 years</span></p>
          </li>
        </ul>
    

    </div>
    </div>
  )
}
