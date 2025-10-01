import { useEffect, useRef } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Star, ArrowForward } from '@mui/icons-material';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import "./show.css";

export default function ShowT() {
  const particlesRef = useRef(null);
 const navigate = useNavigate();
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('.animated-element').forEach(element => {
      observer.observe(element);
    });

    // Create particles only once using ref
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Use CSS variables for better performance
        particle.style.setProperty('--left', `${Math.random() * 100}%`);
        particle.style.setProperty('--top', `${Math.random() * 100}%`);
        particle.style.setProperty('--size', `${Math.random() * 10 + 2}px`);
        particle.style.setProperty('--duration', `${Math.random() * 10 + 10}s`);
        particle.style.setProperty('--delay', `${Math.random() * 5}s`);
        
        particlesRef.current.appendChild(particle);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Memoize animation variants
  const heroContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  const heroVisualVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, delay: 0.3, type: "spring" }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 }
    }
  };

  const renderFloatingShapes = () => {
    return Array(5).fill(null).map((_, i) => (
      <motion.div
        key={i}
        className={`floating-shape shape-${i}`}
        animate={{
          y: [0, -20, 0],
          rotate: [0, i % 2 === 0 ? 15 : -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.2
        }}
      />
    ));
  };

  const renderStars = () => {
    return Array(5).fill(null).map((_, i) => (
      <motion.div 
        key={i}
        animate={{ 
          rotate: [0, 10, 0, -10, 0],
          scale: [1, 1.2, 1, 1.2, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: i * 0.15,
          repeatDelay: 1
        }}
        className="star-wrapper"
      >
        <Star className="star-icon" />
      </motion.div>
    ));
  };

  return (
    <Box className="main-container">
      <div className="particles-container" ref={particlesRef}></div>
      <div className="gradient-overlay"></div>
      <Container>
        {/* Hero section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          className="hero-section"
          flexWrap="wrap"
          spacing={{ xs: 4, md: 0 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContentVariants}
            className="animated-element hero-content"
          >
            <div className="glowing-text">
              <Typography variant="h1" className="hero-title">
                Elevate Your Design Experience
              </Typography>
            </div>
            <div className="blinking-cursor"></div>
            <Typography variant="body1" className="hero-quote">
              "The templates are incredibly well-designed and easy to customize. Saved us weeks of development time!"
            </Typography>
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
              <ArrowForward className="arrow-icon" />
            </motion.button>


          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={heroVisualVariants}
            className="hero-visual"
          >
            <div className="cube-container">
              <div className="cube">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
              </div>
            </div>
            <div className="animated-shapes">
              {renderFloatingShapes()}
            </div>
          </motion.div>
        </Stack>

        {/* Stats section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={statsVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="stats-container"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent={{ xs: "center", md: "space-between" }}
            className="stats-section animated-element"
            spacing={{ xs: 4, md: 2 }}
          >
            {['templates', 'customers', 'support'].map((type, index) => (
              <Box key={type} className="stat-box">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="stat-inner"
                >
                  <div className={`stat-icon ${type}-icon`}></div>
                  <Typography className="stat-number" variant="body2">
                    {type === 'support' ? '24/7' : '50+'}
                  </Typography>
                  <Typography className="stat-label" variant="p">
                    {type === 'templates' ? 'Completed Projects' : 
                     type === 'customers' ? 'Happy Customers' : 'Support Available'}
                  </Typography>
                </motion.div>
              </Box>
            ))}
          </Stack>
        </motion.div>

        {/* Testimonials section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={testimonialVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box className="testimonial-section animated-element">
            <Typography variant="h3" className="section-title"> 
              What Our Customers Say
            </Typography>
              
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="stars-container"
            >
              {renderStars()}
            </motion.div>
              
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="testimonial-wrapper"
            >
              <div className="testimonial-card">
                <div className="quote-mark">"</div>
                <Typography variant="body1" className="testimonial-text">
                  The templates are incredibly well-designed and easy to customize. Saved us weeks of development time!
                </Typography>
                <Stack 
                  direction={{ xs: "column", sm: "row" }} 
                  justifyContent="space-around" 
                  flexWrap="wrap"
                  spacing={2}
                >
                  {[
                    { name: 'Tarek Abdelkarim', title: 'Product Manager' },
                    // { name: 'Sarah', title: 'Product Manager' }
                  ].map((author, index) => (
                    <div key={index} className="testimonial-author">
                      <div className="author-avatar"></div>
                      <div className="author-info">
                        <Typography className="author-name">{author.name}</Typography>
                        <Typography className="author-title">{author.title}</Typography>
                      </div>
                    </div>
                  ))}
                </Stack>
              </div>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}