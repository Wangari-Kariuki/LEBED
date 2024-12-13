import React from 'react'
import founder_profile from '../images/icon3.jpeg'
import '../Styles/body.css'
export default function FounderSection() {
  return (
    <div classname="founderSection-container">
      <img  src = {founder_profile} alt = "" class  = "w-[50px]"/>
        <p className='Founder_description'>
          <h1>Stella Kanyori</h1>
          Is the founder and CEO of Lebed Healthewasys. 
          She is a dedicated and passionate Physiotherapist with years of experience in the field.
        </p>
        <img/>
    </div>
  )
}
