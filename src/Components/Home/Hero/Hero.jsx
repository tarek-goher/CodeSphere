import './hero.css';
import Lottie from "lottie-react";
import { motion } from 'framer-motion';
import programing from '../../../animation/Animation - 1740606391704.json';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className='hero'>
        <div className="text">
          <motion.h2 className="title-wrapper"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 60, damping: 14 }}
          >
            <span className='title'>Welcome TO <span>CodeSphere</span></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.6 }}
          >
            We are a passionate team of developers and designers dedicated to creating innovative, user-friendly applications that empower businesses to thrive in the digital world.
          </motion.p>

          <motion.button
            className="cta-button"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/Template')}
          >
            Get Started
          </motion.button>
        </div>

        <motion.div
          className="animation"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", damping: 14 }}
        >
          <Lottie className='ANIMATION' animationData={programing} />
        </motion.div>
      </div>

      <div className="floating-dots">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`dot dot-${i + 1}`} />
        ))}
      </div>
    </div>
  );
}