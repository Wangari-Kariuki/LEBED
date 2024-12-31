import React from 'react'
import '../index.css'
import '../Styles/Hero.css'
import logo from '../images/Lebed_healthways_logo-removebg-preview (1).png'



export default function HeroSection() {
  return (
    <div  className ="hero">
      <img src= {logo} alt = ""/>
        <div className="title-slogan-container">
             <div className='title_hero'>
                    <h1>LEBED</h1>
                    <h2>HEALTHWAYS</h2>
            </div>
            <div className='slogan'>
                    <p>Quality care begins at home</p>

            </div>
        </div>
        
    </div>
  )
}
