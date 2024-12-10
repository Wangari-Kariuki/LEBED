import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './Sections/Hero';
import AboutSection from './Sections/About';
import Info_card from './Sections/info_card';
import './index.css';
import './Styles/body.css';

export default function Webpage() {
  return (
    <div className='body'>
      <HeroSection />
      <div className="bg-[#E8D5B5] flex justify-center items-center">
        <Info_card />
      </div>
      <FadeinWhenVisible>
        <AboutSection />
      </FadeinWhenVisible>
    </div>
  );
}

function FadeinWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
