import React, {useRef, useState} from 'react'
import arrow_forward from '../images/arrow-forward.png'
import arrow_back from '../images/arrow-backward.png'
import '../Styles/info_card.css'
import icon1 from '../images/icon1.jpeg'
import icon2 from '../images/icon2.jpeg'
import icon3 from '../images/icon3.jpeg'

export default function Info_card() {
    //to select the ul tag we use th useRed
    const slider = useRef();
    const [currentIndex,setCurrentindex] = useState(0)
    const totalSlides = slider.current ? slider.current.children.length : 5;
    ;
    //let translate x be 0

    //we add logic for the back and next icons
    const slideForward = () => {
        if(currentIndex < totalSlides - 1){
            setCurrentindex((currentIndex + 1)%totalSlides)
        }else {
            setCurrentindex(0)
        }
        // slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if( currentIndex > 0){
            setCurrentindex((currentIndex - 1) %totalSlides)
        } else {
            setCurrentindex(totalSlides - 1); // Go to the last slide
        }
        // slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='infos'>
        <img src = {arrow_forward} alt='' onClick={slideForward} className='next-btn'/>
        <img src = {arrow_back} alt='' onClick={slideBackward} className='back-btn'/>
    <div className='info-card-slider'>
        
        <ul ref={slider}
         style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${currentIndex * 100}%)`,
        }}
        class= "flex transition-transform duration-500"
        >
            <li>
            <div className='info-slide'>
                {/* <img class = "w-24 h-24" src = {icon1} alt = ""/> */}
            <div class="text-center p-2 text-[#ff5100]">
                <h1>
                Compassion and Patient-Centered Care 
                </h1>
            </div>
            <div class= "pt-6 md:p-8 text-center md:text-left space-y-4">
                <p class= "text-lg font-medium text-center">
                We prioritize the dignity, comfort, 
                and well-being of every patient, ensuring they feel heard, 
                valued, and respected.
                </p>
            </div>
        </div>
        </li>

        <li>
            <div className='info-slide'>
            <div className='info-card-header'>
                <h1>
                Integrity and Transparency 
                </h1>
            </div>
            <div className='info-card-body'>
                <p>
                We uphold the highest ethical standards, 
                fostering trust through honesty and accountability in 
                everything we do.
                </p>
            </div>
        </div>
        </li>

        <li>
            <div className='info-slide'>
            <div className='info-card-header'>
                <h1>
                Innovation and Excellence 
                </h1>
            </div>
            <div className='info-card-body'>
                <p>
                We continuously seek groundbreaking solutions and embrace 
                cutting-edge technologies to improve healthcare outcomes.
                </p>
            </div>
        </div>
        </li>

        <li>
            <div className='info-slide'>
            <div className='info-card-header'>
                <h1>
                Collaboration and Teamwork  
                </h1>
            </div>
            <div className='info-card-body'>
                <p>
                We believe in the power of collaboration, 
                working with healthcare professionals, researchers, 
                and communities to deliver exceptional care.
                </p>
            </div>
        </div>
        </li>

        <li>
            <div className='info-slide'>
            <div className='info-card-header'>
                <h1>                
                 Commitment to Quality 
                </h1>
            </div>
            <div className='info-card-body'>
                <p>
                We are dedicated to providing safe, effective,
                 and evidence-based medical services, 
                ensuring the highest level of care for our patients.
                </p>
            </div>
        </div>
        </li>
        </ul>
        
    </div>
    </div>
  )
}
