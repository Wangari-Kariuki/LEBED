import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor_movement({ children }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse movement
  const handleMouseMovement = (e) => {
    if(isHovered){

        setCursorPosition({
            x: e.clientX,
            y: e.clientY, // Ensure 'y' is lowercase
          });
        };
    }
    

  return (
    <div onMouseMove={handleMouseMovement}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
      <motion.div
       initial={{ x: 0, y: 0 }}
       animate={
        isHovered
          ? {

              y: cursorPosition.y - window.outerHeight / 2.5,
            }
          : { x: 0, y: 0 } // Reset position when not hovered
      }
      transition={{ type: 'tween', duration: 0.7 }}
    >
        {children}
      </motion.div>
    </div>
  );
}
