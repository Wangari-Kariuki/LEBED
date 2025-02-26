import React from 'react'
import orth_image from'../images/orth_phys.jpg'
import geretric_img from '../images/gereatric.jpg'
import pediatric_img from '../images/pediatric.jpg'
import neuro_img from '../images/orth_phys.jpg'
import './TopNavigationbar'
import CursorMovement from '../Components/cursor_movement'
import sports_phys from '../images/sports_phys.jpg'
import chest_phys from '../images/Postural Drainage Positions and Chest Physical Therapy (CPT).jpeg'
export default function Services() {


  return (
    <div id="services" className=" center shadow-custom-heavy p-4 rounded border-t-1 border-[#695b5b] ">
        
        <ul class="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                  <CursorMovement>
                                  <div className="service1">
                    <li className="p-4 text-center border-[#0d0d31] bg-[#787586] rounded shadow-md h-[400px] w-[300px] sm:h-[330px] sm:w-[250px] md:h-[370px] md:w-[280px]">
                      <img 
                        src={orth_image} 
                        alt="" 
                        className="w-[200px] h-[220px] mx-auto sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[200px]" 
                      />
                      <h2 className="my-2 text-[#f9f871] font-semibold text-[16px] sm:text-[12px] md:text-[14px]">
                        Orthopedic Physiotherapy
                      </h2>
                      <p className="leading-5 text-[13px] sm:text-[10px] md:text-[12px] my-3">
                        Management of chronic conditions such as arthritis, tendonitis, and back pain. 
                        Customized exercise programs to 
                        <span className="font-bold"> restore strength, flexibility, and function.</span>
                      </p>
                    </li>
                  </div>

            </CursorMovement>
            
                <CursorMovement>
                <div className="service2">
                        <li className="p-4 text-center border-[#0d0d31] bg-[#787586] rounded shadow-md h-[450px] w-[300px] sm:h-[330px] sm:w-[250px] md:h-[370px] md:w-[280px]">
                        <img src={geretric_img} alt = "" className="w-[200px] h-[220px] mx-auto sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[200px]" />
                        <h2 className="my-2 text-[#f9f871] font-semibold text-[16px] sm:text-[12px] md:text-[14px]">
                            Geriatric Physiotherapy </h2>
                            <p className="leading-5 text-[13px] sm:text-[10px] md:text-[12px] my-3">
                                Management of age-related conditions like osteoporosis, arthritis, and balance issues.
                                Fall prevention strategies and mobility training.
                                Pain relief and maintenance of independence through <span class="font-bold">tailored exercise programs.</span>
                        </p>
                        </li>

                </div>
                </CursorMovement>
           
           
           <CursorMovement>
                <div className="service3">
                <li className="p-4 text-center border-[#0d0d31] bg-[#787586] rounded shadow-md h-[450px] w-[300px] sm:h-[330px] sm:w-[250px] md:h-[370px] md:w-[280px]">
                <img  src={pediatric_img} alt = "" className="w-[200px] h-[220px] mx-auto sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[200px]" />
                                <h2 className="my-2 text-[#f9f871] font-semibold text-[16px] sm:text-[12px] md:text-[14px]"> Pediatric Physiotherapy   </h2>
                                <p class=" leading-5 text-[13px] sm:text-[10px] my-3">
                                Developmental delays and congenital conditions such as cerebral palsy.
                                Rehabilitation for injuries and post-surgical recovery.
                                Support for<span className='font-bold'> motor skill development </span>and functional independence.
                                </p>
                              </li>

                </div>
           </CursorMovement>
        
            
            <CursorMovement>
                <div className="service4">
                <li className="p-4 text-center border-[#0d0d31] bg-[#787586] rounded shadow-md h-[450px] w-[300px] sm:h-[330px] sm:w-[250px] md:h-[370px] md:w-[280px]">
                <img  src={neuro_img} alt = "" class = "w-[200px] h-[200px] mx-auto  sm:w-[150px] sm:h-[150px]  " />
                                <h2  className="my-2 text-[#f9f871] font-semibold text-[16px] sm:text-[12px] md:text-[14px]">Neuro Physiotherapy</h2>
                                <p class=" leading-5 text-[13px] sm:text-[10px] my-3"> <span class="font-bold">Stroke recovery</span>, focusing on improving mobility and independence.
                                        Management of conditions like Parkinson’s disease, multiple sclerosis, and spinal cord injuries.
                                        Functional training to <span class="font-bold" > improve coordination, balance, and strength.</span>
                                </p>
                                </li>
                </div>
            </CursorMovement>

               
            <CursorMovement>
                <div className="service5">
                <li className="p-4 text-center border-[#0d0d31] bg-[#787586] rounded shadow-md h-[450px] w-[300px] sm:h-[330px] sm:w-[250px] md:h-[370px] md:w-[280px]">
                <img  src={sports_phys} alt = "" className="w-[200px] h-[220px] mx-auto sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[200px]" />
                                <h2  className="my-2 text-[#f9f871] font-semibold text-[16px] sm:text-[12px] md:text-[14px]">Sports Physiotherapy  </h2>
                                <p class=" leading-5 text-[13px] sm:text-[10px]  my-3"> 
                                Prevention, treatment, and rehabilitation of sports-related injuries.
                                Performance enhancement through personalized training programs.
                                Recovery plans tailored to specific sports and activities to ensure a safe return to play.

                                </p>
                                </li>
                </div>
            </CursorMovement>


               
            <CursorMovement>
                <div className="service4">
                <li className="p-4 text-center border-[#0d0d31] bg-[#787586] rounded shadow-md h-[450px] w-[300px] sm:h-[330px] sm:w-[250px] md:h-[380px] md:w-[280px]">
                <img  src={chest_phys} alt = ""className="w-[200px] h-[220px] mx-auto sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[200px]" />
                                <h2 className="my-2 text-[#f9f871] font-semibold text-[16px] sm:text-[12px] md:text-[14px]">Chest Physiotherapy 
                                </h2>
                                <p className="leading-5 text-[13px] sm:text-[10px] md:text-[12px] my-3"> 
                                Designed to support patients with respiratory conditions, such as:

                                        Techniques for clearing lung secretions in conditions like bronchitis, asthma, and cystic fibrosis.
                                        Breathing exercises to enhance lung function.
                                        Pre- and post-operative care for thoracic surgeries.


                                </p>
                                </li>
                </div>
            </CursorMovement>

           
        </ul>
        
    </div>
  )
}
