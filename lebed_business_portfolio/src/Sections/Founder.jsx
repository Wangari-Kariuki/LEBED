import React from 'react'
import founder_profile from '../images/founder.jpg'
import '../Styles/body.css'

export default function FounderSection() {
  return (
    <div class="">
      {/* <Section_titles title ={"About the founder"} class="absolute  top-0 left-0"/> */}
    <div className ='founder-container'>
      <img src = {founder_profile} alt="" class='w-[200px] h-[200px]  p-[5px] '/>
      <div className='text-container'>
      <p><span class = "px-[10px]">Stella Kanyori </span>
      is the visionary founder and CEO of Lebed Healthways.She
      is a highly skilled and passionate physiotherapist with extensive experience 
      in promoting health and wellness. With a career spanning 4 years, she has dedicated herself to helping individuals recover, 
      thrive, and achieve their physical potential.
      </p>
      </div>
     
      </div>
      </div>
  )
}
