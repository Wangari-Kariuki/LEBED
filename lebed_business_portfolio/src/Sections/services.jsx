import React from 'react'
import orth_image from'../images/orth_phys.jpg'
import geretric_img from '../images/gereatric.jpg'
import pediatric_img from '../images/pediatric.jpg'
import neuro_img from '../images/orth_phys.jpg'
import Section_titles from './section_titles'
import Cursor_movement from '../Components/cursor_movement'
import sports_phys from '../images/sports_phys.jpg'
export default function Services() {


  return (
    <div className=" shadow-custom-heavy p-4 rounded border-t-1 border-[#695b5b] ">
        
        <ul class="grid grid-cols-3 gap-4">
                <Cursor_movement>
                        <div className="service1">
                        <li class=" p-4 text-center  border-[#0d0d31]-300 bg-[#787586] rounded shadow-md h-[400px] w-[300px]">
                    <img src={orth_image} alt = "" class = "w-[200px] h-[220px] mx-auto" />
                    <h2 class = "my-2 text-[#f9f871] font-semibold"> Orthopedic Physiotherapy </h2>
                    <p class=" leading-5 text-[15px] my-3" >
                    Management of chronic conditions such as arthritis, tendonitis, and back pain.
                    Customized exercise programs to <span class= "font-bold"> restore strength, flexibility, and function.</span>
                    </p>
                    </li>
                        </div>
            </Cursor_movement>
            
                <Cursor_movement>
                <div className="service2">
                        <li class=" p-4 text-center  border-[#0d0d31]-300 bg-[#787586] rounded shadow-md h-[400px] w-[300px]">
                        <img src={geretric_img} alt = "" class = "w-[200px] h-[200px] mx-auto " />
                        <h2 class = "my-2 text-[#f9f871] font-semibold">Geriatric Physiotherapy </h2>
                        <p class=" leading-5 text-[15px] my-3">Management of age-related conditions like osteoporosis, arthritis, and balance issues.
                                Fall prevention strategies and mobility training.
                                Pain relief and maintenance of independence through <span class="font-bold">tailored exercise programs.</span>
                        </p>
                        </li>

                </div>
                </Cursor_movement>
           
           
           <Cursor_movement>
                <div className="service3">
                                <li class=" p-4 text-center  border-[#0d0d31]-300 bg-[#787586] rounded shadow-md h-[400px] w-[300px]">
                                <img src={pediatric_img} alt = "" class = "w-[200px] h-[220px] mx-auto " />
                                <h2 class = "my-2 text-[#f9f871] font-semibold" > Pediatric Physiotherapy   </h2>
                                <p class=" leading-5 text-[15px] my-3">
                                Developmental delays and congenital conditions such as cerebral palsy.
                                Rehabilitation for injuries and post-surgical recovery.
                                Support for<span className='font-bold'> motor skill development </span>and functional independence.
                                </p>
                              </li>

                </div>
           </Cursor_movement>
        
            
            <Cursor_movement>
                <div className="service4">
                                <li class=" p-4 text-center  border-[#0d0d31]-300 bg-[#787586] rounded shadow-md h-[400px] w-[300px]">
                                <img src={neuro_img} alt = "" class = "w-[200px] h-[200px] mx-auto  " />
                                <h2  class = "my-2 text-[#f9f871] font-semibold" >Neuro Physiotherapy</h2>
                                <p class=" leading-5 text-[15px] my-3"> <span class="font-bold">Stroke recovery</span>, focusing on improving mobility and independence.
                                        Management of conditions like Parkinson’s disease, multiple sclerosis, and spinal cord injuries.
                                        Functional training to <span class="font-bold" > improve coordination, balance, and strength.</span>
                                </p>
                                </li>
                </div>
            </Cursor_movement>

               
            <Cursor_movement>
                <div className="service4">
                                <li class=" p-4 text-center  border-[#0d0d31]-300 bg-[#787586] rounded shadow-md h-[400px] w-[300px]">
                                <img src={sports_phys} alt = "" class = "w-[200px] h-[200px] mx-auto  " />
                                <h2  class = "my-2 text-[#f9f871] font-semibold" >Sports Physiotherapy  </h2>
                                <p class=" leading-5 text-[15px] my-3"> 
                                Prevention, treatment, and rehabilitation of sports-related injuries.
                                Performance enhancement through personalized training programs.
                                Recovery plans tailored to specific sports and activities to ensure a safe return to play.

                                </p>
                                </li>
                </div>
            </Cursor_movement>

           
        </ul>
        
    </div>
  )
}
