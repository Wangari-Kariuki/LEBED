import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './Sections/Hero';
import AboutSection from './Sections/About';
import InfoCard from './Sections/Info_Cards/Info_card';
import './index.css';
import './Styles/body.css';
import TopNavigationbar from './Sections/TopNavigationbar';
import MissionVision from './Sections/Mission-vision';
import FounderSection from './Sections/Founder';
import ContactSection from './Sections/Contact';
import Services from '../src/Sections/services'
import SectionTitles from './Sections/section_titles';
//import Cursor_movement from './Components/cursor_movement';
export default function Webpage() {


  return (
    <div className='body'>
      <TopNavigationbar/>
      <HeroSection className='flex flex-col gap-5'/>

      <SectionTitles title={"About us"} />
      <FadeinWhenVisible >
            <AboutSection/>
          </FadeinWhenVisible>
    

 <div className='bg-[#FAF0E6]'>
    <SectionTitles title={"Our values"} class="relative" />
          <div className="bg-[#FAF0E6]">

          
            <InfoCard/>
          </div>
          
           <div className ="bg-[#FAF0E6] rounded-[7%]"> 

    <SectionTitles title={"Our mission and vision"} />
          <FadeinWhenVisibleSlower>
          <MissionVision/>
          </FadeinWhenVisibleSlower>
          </div>

    <SectionTitles title={"Our services"} className="text-black" />
    <div className="mx-[20px]">
    <Services/>
    </div>
      

<SectionTitles title={"About the founder"} />
<div className='container-div'>
<FadeinWhenVisibleSlower>
        <FounderSection/>
        </FadeinWhenVisibleSlower>
</div>

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

function FadeinWhenVisibleSlower({ children }) {
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


