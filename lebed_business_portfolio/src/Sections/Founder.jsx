import React from 'react'
import founder_profile from '../images/icon3.jpeg'
import '../Styles/body.css'
export default function FounderSection() {
  return (
    <div className ='founder-container'>
      <img src = {founder_profile} alt="" class='w-[100px]  p-[10px] rounded-md'/>
      <div className='text-container'>
      <h1 class = "px-[24px]  text-500-red">Founder: Stella Kangori</h1>
      <p>
      the founder and CEO of Lebed Healthewasys. 
      She is a dedicated and passionate 
      Physiotherapist with years of experience in the field.
      </p>
      </div>
     
      </div>
  )
}
