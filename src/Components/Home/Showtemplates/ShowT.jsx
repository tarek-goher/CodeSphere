import React, { useEffect } from "react";
// import "./show.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Star } from '@mui/icons-material';
import { motion } from "framer-motion";

export default function ShowT() {
  useEffect(() => {
    // Initialize any animations or effects here
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-element').forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "#121212", minHeight: "100vh" }}>
      <Container>
        {/* Hero Section with Animated Background */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ 
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(45deg, #121212 0%, #1a1a1a 100%)",
              zIndex: -1
            }
          }}
          className="all-div"
          flexWrap={"wrap"}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="animated-element hero-content"
            style={{ 
              flex: 1, 
              padding: "2rem",
              maxWidth: "600px"
            }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" }, // Smaller title size
                fontWeight: 700,
                background: "linear-gradient(90deg, #3a7aff, #92d0e0)",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3
              }}
            >
              Elevate Your Design Experience
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#fff",
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                mb: 4,
                opacity: 0.8
              }}
            >
              "The templates are incredibly well-designed and easy to customize. Saved us weeks of development time!"
            </Typography>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(90deg, #3a7aff, #92d0e0)",
                border: "none",
                padding: "15px 30px",
                borderRadius: "50px",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(58, 122, 255, 0.3)"
              }}
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div className="animated-shapes">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="floating-shape"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, i % 2 === 0 ? 10 : -10, 0]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                  style={{
                    width: 50 + i * 10,
                    height: 50 + i * 10,
                    borderRadius: i % 2 === 0 ? "30%" : "50%",
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? "#3a7aff" : "#92d0e0"}, ${i % 2 === 0 ? "#92d0e0" : "#ffb830"})`,
                    position: "absolute",
                    opacity: 0.7 - i * 0.1,
                    filter: "blur(2px)",
                    transform: `translate(${i * 30 - 60}px, ${i * 20 - 40}px)`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </Stack>

        {/* Stats Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            alignItems={{ xs: "center", sm: "center", md: "center" }}
            justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
            gap={{ xs: "30px", sm: "40px", md: "50px" }}
            className="bgcolor animated-element"
            sx={{
              padding: { xs: "20px", sm: "25px", md: "30px" },
              width: { xs: "90%", sm: "80%", md: "auto" },
              margin: "0 auto 100px auto",
              background: "rgba(26, 32, 44, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              border: "1px solid rgba(58, 122, 255, 0.2)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              transform: "translateY(-50px)"
            }}
          >
            <Box className='num1 stat-box' sx={{ position: "relative", padding: "20px" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                    mb: 1,
                    fontWeight: 500,
                    color: "#3a7aff",
                    textAlign: { xs: "center", md: "left" }
                  }}
                  variant="body2"
                >
                  1500+
                </Typography>
                <Typography 
                  variant="p" 
                  sx={{ 
                    color: "#fff",
                    textAlign: { xs: "center", md: "left" },
                    display: "block"
                  }}
                >
                  Templates Available
                </Typography>
              </motion.div>
            </Box>
            <Box className='num2 stat-box' sx={{ position: "relative", padding: "20px" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                    mb: 1,
                    fontWeight: 500,
                    color: "#3a7aff",
                    textAlign: { xs: "center", md: "left" }
                  }}
                  variant="body2"
                >
                  2K+
                </Typography>
                <Typography 
                  variant="p" 
                  sx={{ 
                    color: "#fff",
                    textAlign: { xs: "center", md: "left" },
                    display: "block"
                  }}
                >
                  Happy Customers
                </Typography>
              </motion.div>
            </Box>
            <Box className='num3 stat-box' sx={{ position: "relative", padding: "20px" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                    mb: 1,
                    fontWeight: 500,
                    color: "#3a7aff",
                    textAlign: { xs: "center", md: "left" }
                  }}
                  variant="body2"
                >
                  24/7
                </Typography>
                <Typography 
                  variant="p" 
                  sx={{ 
                    color: "#fff",
                    textAlign: { xs: "center", md: "left" },
                    display: "block"
                  }}
                >
                  Support Available
                </Typography>
              </motion.div>
            </Box>
          </Stack>
        </motion.div>

        {/* Testimonial Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: { xs: "90%", sm: "80%", md: "70%" },
              margin: "0 auto",
              padding: "20px"
          }} className="animated-element" >
              <Typography variant="h3" sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  mb: 2,
                  fontWeight: 600,
                  color: "#3a7aff",
                  textAlign: "center"
              }}> 
                  What Our Customers Say
              </Typography>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ 
                    display: 'flex', 
                    gap: "15px", 
                    justifyContent: "center", 
                    mb: 3 
                }}>
                    {[...Array(5)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.1,
                          repeatDelay: 2
                        }}
                      >
                        <Star sx={{ 
                          color: 'gold', 
                          fontSize: { xs: '1.5rem', md: '2rem' },
                          filter: "drop-shadow(0 0 5px rgba(255, 215, 0, 0.7))"
                        }} />
                      </motion.div>
                    ))}
                </Box>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography variant="body1" sx={{ 
                    color: "#fff",
                    fontSize: { xs: "1rem", sm:"1.2rem", md: "1.4rem" }, 
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    maxWidth: "85%",
                    margin: "0 auto"
                }}>
                    "The templates are incredibly well-designed and easy to customize. Saved us weeks of development time!"
                </Typography>
              </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}