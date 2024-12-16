import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './Sections/Hero';
import AboutSection from './Sections/About';
import Info_card from './Sections/Info_Cards/Main';
import './index.css';
import './Styles/body.css';
import TopNavigationbar from './Sections/TopNavigationbar';
import Mission_vision from './Sections/Mission-vision';
import FounderSection from './Sections/Founder';
import ContactSection from './Sections/Contact';

export default function Webpage() {
  return (
    <div className='body'>
      <TopNavigationbar/>
      <HeroSection />
      <div className="bg-[#E8D5B5] flex justify-center items-center">
        <Info_card />
      </div>
      <FadeinWhenVisible>
        <AboutSection />
      </FadeinWhenVisible>

      <div class ="bg-black"> 
      <FadeinWhenVisible_slower>
      <Mission_vision/>
      </FadeinWhenVisible_slower>
      </div>
      <FadeinWhenVisible_slower>
      <FounderSection/>
      </FadeinWhenVisible_slower>
 
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
      transition={{ duration: 2.0}}
      variants={{
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
