import React, { useEffect } from "react";
import "./show.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Star, ArrowForward } from '@mui/icons-material';
import { motion } from "framer-motion";

export default function ShowT() {
  useEffect(() => {
    // إعداد مراقب التقاطع للعناصر المتحركة
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

    document.querySelectorAll('.animated-element').forEach(element => {
      observer.observe(element);
    });

    // إضافة تأثير الخلفية المتحركة
    const particlesContainer = document.querySelector('.particles-container');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // تعيين خصائص عشوائية لكل جزء
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 10 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box className="main-container">
      <div className="particles-container"></div>
      <div className="gradient-overlay"></div>
      <Container>
        {/* قسم الغلاف مع خلفية متحركة */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="hero-section"
          flexWrap={"wrap"}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="animated-element hero-content"
          >
            <div className="glowing-text">
              <Typography 
                variant="h1" 
                className="hero-title"
              >
                Elevate Your Design Experience
              </Typography>
            </div>
            <div className="blinking-cursor"></div>
            <Typography 
              variant="body1" 
              className="hero-quote"
            >
              "The templates are incredibly well-designed and easy to customize. Saved us weeks of development time!"
            </Typography>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(58, 122, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Get Started
              <ArrowForward className="arrow-icon" />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
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
              {[...Array(5)].map((_, i) => (
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
              ))}
            </div>
          </motion.div>
        </Stack>

        {/* قسم الإحصائيات مع حركات */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="stats-container"
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            alignItems={{ xs: "center", sm: "center", md: "center" }}
            justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
            className="stats-section animated-element"
          >
            <Box className='stat-box'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
                viewport={{ once: true }}
                className="stat-inner"
              >
                <div className="stat-icon templates-icon"></div>
                <Typography className="stat-number" variant="body2">
                  50+
                </Typography>
                <Typography className="stat-label" variant="p">
                  Templates Available
                </Typography>
              </motion.div>
            </Box>
            <Box className='stat-box'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                viewport={{ once: true }}
                className="stat-inner"
              >
                <div className="stat-icon customers-icon"></div>
                <Typography className="stat-number" variant="body2">
                  50+
                </Typography>
                <Typography className="stat-label" variant="p">
                  Happy Customers
                </Typography>
              </motion.div>
            </Box>
            <Box className='stat-box'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
                viewport={{ once: true }}
                className="stat-inner"
              >
                <div className="stat-icon support-icon"></div>
                <Typography className="stat-number" variant="body2">
                  24/7
                </Typography>
                <Typography className="stat-label" variant="p">
                  Support Available
                </Typography>
              </motion.div>
            </Box>
          </Stack>
        </motion.div>

        {/* قسم شهادات العملاء مع تأثيرات حركية */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
                {[...Array(5)].map((_, i) => (
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
                ))}
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
                 <Stack direction={'row'}  justifyContent={'space-around'}  flexWrap={'wrap'} >
                 <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <Typography className="author-name">Tarek Abdelkarim</Typography>
                      <Typography className="author-title">Product Manager</Typography>
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
                    <div className="author-info">
                      <Typography className="author-name">Sarah</Typography>
                      <Typography className="author-title">Product Manager</Typography>
                    </div>
                  </div>
                 </Stack>
                </div>
              </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}