import React from 'react'
import founder_profile from '../images/founder.jpg'
import '../Styles/body.css'
import Section_titles from './section_titles'
export default function FounderSection() {
  return (
    <div class="">
      {/* <Section_titles title ={"About the founder"} class="absolute  top-0 left-0"/> */}
    <div className ='founder-container'>
      <img src = {founder_profile} alt="" class='w-[200px] h-[200px]  p-[5px] '/>
      <div className='text-container'>
      <h1 class = "px-[24px]  text-500-red">Founder: Stella Kangori</h1>
      <p>
      the founder and CEO of Lebed Healthewasys. 
      She is a dedicated and passionate 
      Physiotherapist with years of experience in the field.
      </p>
      </div>
     
      </div>
      </div>
  )
}
