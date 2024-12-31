import React, {useState} from 'react';
import { motion } from 'framer-motion';
import HeroSection from './Sections/Hero';
import AboutSection from './Sections/About';
import Info_card from './Sections/Info_Cards/Info_card';
import './index.css';
import './Styles/body.css';
import TopNavigationbar from './Sections/TopNavigationbar';
import Mission_vision from './Sections/Mission-vision';
import FounderSection from './Sections/Founder';
import ContactSection from './Sections/Contact';
import Services from '../src/Sections/services'
import Section_titles from './Sections/section_titles';
//import Cursor_movement from './Components/cursor_movement';
export default function Webpage() {


  return (
    <div className='body'>
      <TopNavigationbar/>
      <HeroSection />

      <Section_titles title={"About us"} />
      <FadeinWhenVisible >
            <AboutSection/>
          </FadeinWhenVisible>
    

 <div className='bg-[#FAF0E6]'>
    <Section_titles title={"Our values"} class="relative" />
          <div className="bg-[#FAF0E6] flex justify-center items-center">

          
            <Info_card/>
          </div>
          
           <div class="bg-[#FAF0E6] rounded-[7%]"> 

    <Section_titles title={"Our mission and vision"} />
          <FadeinWhenVisible_slower>
          <Mission_vision/>
          </FadeinWhenVisible_slower>
          </div>

    <Section_titles title={"Our services"} className="text-black" />
         <Services/>

<Section_titles title={"About the founder"} />
        <FadeinWhenVisible_slower>
        <FounderSection/>
        </FadeinWhenVisible_slower>
</div>

 
 <ContactSection/>
    </div>
  );
}

function FadeinWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once:  false }}
      transition={{ duration: 1.0}}
      variants={{
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function FadeinWhenVisible_slower({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false}}
      transition={{ duration: 1.0}}
      variants={{
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}


