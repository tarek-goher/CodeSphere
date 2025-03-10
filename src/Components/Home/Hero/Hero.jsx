import React, { useEffect, useRef } from 'react';
import './hero.css';
import Lottie from "lottie-react";
import { motion } from 'framer-motion';
import programing from '../../../animation/Animation - 1740606391704.json';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const dotsRef = useRef(null);
  const navigate = useNavigate();  // تعريف دالة التنقل

  const handleButtonClick = () => {
    navigate('/Template');  // انتقل إلى الصف
  }
  useEffect(() => {
    // إضافة النقاط المتحركة ديناميكيًا
    if (dotsRef.current) {
      const dots = dotsRef.current;
      for (let i = 0; i < 5; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dots.appendChild(dot);
      }
    }
  }, []);

  return (
    <div className="hero-container">
      <div className='hero'>
        <div className="text">
          <motion.h2
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 80
            }}
          >
            <span className='title'>Welcome TO <span>CodeSphere</span></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            We are a passionate team of developers and designers dedicated to creating innovative, user-friendly applications that empower businesses to thrive in the digital world.
          </motion.p>

          <motion.button
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: 1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleButtonClick}  // عند الضغط على الزر
    >
      Get Started
    </motion.button>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            type: "spring",
            damping: 12
          }}
          className="animation"
        >
          <Lottie className='ANIMATION' animationData={programing} />
        </motion.div>
        
        {/* النقاط المتحركة في الخلفية */}
        <div className="floating-dots" ref={dotsRef}></div>
      </div>
    </div>
  );
}