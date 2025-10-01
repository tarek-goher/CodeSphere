import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Code as CodeIcon, 
  Dashboard as DashboardIcon, 
  PhoneAndroid as MobileIcon, 
  CloudQueue as CloudIcon, 
  Security as SecurityIcon,
  Speed as SpeedIcon
} from '@mui/icons-material';
import imge from '../../assets/abut us.jpg'
import Footer from '../Home/Footer/Footer';
import Nav from '../Home/nav/Nav';
import { useNavigate } from 'react-router-dom';

// Custom animated components using framer-motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact'); // الانتقال إلى الصفحة الرئيسية
  };
  const handleClicks = () => {
    navigate('/Template'); // الانتقال إلى الصفحة الرئيسية
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const services = [
    { icon: <CodeIcon fontSize="large" />, title: "Web Development", description: "Building dynamic, responsive websites using the latest technologies and frameworks." },
    { icon: <MobileIcon fontSize="large" />, title: "Mobile Applications", description: "Developing cross-platform mobile apps that deliver exceptional user experiences." },
    { icon: <DashboardIcon fontSize="large" />, title: "UX/UI Design", description: "Creating intuitive interfaces that captivate users and drive engagement." },
    // { icon: <CloudIcon fontSize="large" />, title: "Cloud Solutions", description: "Implementing scalable cloud infrastructure to support your growing business needs." },
    // { icon: <SecurityIcon fontSize="large" />, title: "Cybersecurity", description: "Protecting your digital assets with advanced security protocols and best practices." },
    // { icon: <SpeedIcon fontSize="large" />, title: "Performance Optimization", description: "Enhancing application speed and efficiency for optimal user experience." }
  ];

  const teamMembers = [
    // { name: "Jane Smith", position: "Founder & CEO", image: "https://via.placeholder.com/300" },
    // { name: "John Davis", position: "CTO", image: "https://via.placeholder.com/300" },
    // { name: "Sarah Johnson", position: "Lead Developer", image: "https://via.placeholder.com/300" },
    // { name: "Michael Chen", position: "UX/UI Designer", image: "https://via.placeholder.com/300" }
  ];

  return (
    <Box> 
       <Box sx={{pb:0 , background:'initial'}}>
           <Nav/>
           </Box>
      <Box sx={{ 
      bgcolor: '#050A30', 
      color: 'white',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <MotionBox
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        sx={{
          background: 'linear-gradient(135deg, #050A30 0%, #233773 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionTypography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold', 
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                  mb: 2,
                  backgroundImage: 'linear-gradient(90deg, #5DBEFF 0%, #4C49EA 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Transforming Ideas Into Digital Reality
              </MotionTypography>
              
              <MotionTypography 
                variant="h6" 
                sx={{ mb: 4, color: '#B4C7ED' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We are a passionate team of developers, designers, and digital strategists dedicated to creating exceptional software solutions.
              </MotionTypography>
              
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    background: 'linear-gradient(90deg, #5DBEFF 0%, #4C49EA 100%)',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    mr: 2,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #4C49EA 0%, #5DBEFF 100%)',
                    }
                  
                  }}

                >
                  Our Projects
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderColor: '#5DBEFF',
                    color: '#5DBEFF',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: '#4C49EA',
                      background: 'rgba(76, 73, 234, 0.1)'
                    }
                  }}
                  onClick={handleClick}
                >
                  Contact Us
                </Button>
              </MotionBox>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                sx={{ position: 'relative' }}
              >
                <MotionBox
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut" 
                  }}
                  sx={{
                    width: '100%',
                    height: { xs: '300px', md: '400px' },
                    background: 'url(https://via.placeholder.com/600x400) center/cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 80px rgba(93, 190, 255, 0.3)'
                  }}
                />
                
                {/* Floating elements for visual interest */}
                {[1, 2, 3].map((item) => (
                  <MotionBox
                    key={item}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.2, 0.8, 0.2],
                      x: [0, item * 20, 0],
                      y: [0, item * -15, 0],
                      rotate: [0, item * 10, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 3 + item,
                      delay: item * 0.5
                    }}
                    sx={{
                      position: 'absolute',
                      width: { xs: '30px', md: '50px' },
                      height: { xs: '30px', md: '50px' },
                      borderRadius: '50%',
                      background: `rgba(93, 190, 255, ${0.2 * item})`,
                      top: `${20 + item * 15}%`,
                      left: `${10 + item * 20}%`,
                      filter: 'blur(8px)'
                    }}
                  />
                ))}
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </MotionBox>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <MotionGrid
          container
          spacing={6}
          alignItems="center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <Grid item xs={12} md={6}>
            <MotionBox 
              variants={fadeIn}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '450px' },
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 80px rgba(93, 190, 255, 0.2)'
                }}
              >
                <Box
                  component="img"
                  src={imge}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                sx={{
                  position: 'absolute',
                  bottom: { xs: '-30px', md: '-50px' },
                  left: { xs: '-20px', md: '-50px' },
                  background: 'linear-gradient(135deg, #5DBEFF 0%, #4C49EA 100%)',
                  borderRadius: '15px',
                  p: { xs: 2, md: 3 },
                  width: { xs: '120px', md: '180px' },
                  height: { xs: '120px', md: '180px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 15px 30px rgba(76, 73, 234, 0.3)'
                }}
              >
                <Typography variant="h2" fontWeight="bold" align="center">
                  10+
                </Typography>
                <Typography variant="body1" align="center">
                  Years of Excellence
                </Typography>
              </MotionBox>
            </MotionBox>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MotionTypography 
              variant="overline"
              sx={{ 
                color: '#5DBEFF',
                fontWeight: 'bold',
                letterSpacing: 2,
                fontSize: '1rem'
              }}
              variants={fadeIn}
            >
              ABOUT OUR COMPANY
            </MotionTypography>
            
            <MotionTypography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 3,
                mt: 1,
                background: 'linear-gradient(90deg, #FFFFFF 0%, #B4C7ED 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              variants={fadeIn}
            >
              A Decade of Digital Innovation
            </MotionTypography>
            
            <MotionTypography 
              variant="body1" 
              sx={{ mb: 3, color: '#B4C7ED', fontSize: '1.1rem', lineHeight: 1.7 }}
              variants={fadeIn}
            >
              Founded in 2024, our company has been at the forefront of technological innovation, delivering exceptional software solutions that transform businesses and enhance user experiences.
            </MotionTypography>
            
            <MotionTypography 
              variant="body1" 
              sx={{ mb: 4, color: '#B4C7ED', fontSize: '1.1rem', lineHeight: 1.7 }}
              variants={fadeIn}
            >
              Our team of talented developers, designers, and digital strategists work collaboratively to solve complex challenges and create impactful digital experiences that drive results.
            </MotionTypography>
            
            <MotionGrid 
              container 
              spacing={3}
              variants={staggerChildren}
            >
              {['Innovation', 'Quality', 'Reliability', 'Agility'].map((value, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <MotionBox 
                    variants={fadeIn}
                    sx={{
                      textAlign: 'center',
                      p: 2,
                      borderRadius: '10px',
                      background: 'rgba(93, 190, 255, 0.1)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography variant="h3" fontWeight="bold" color="#5DBEFF">
                      {index + 1}
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {value}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </MotionGrid>
          </Grid>
        </MotionGrid>
      </Container>

      {/* Services Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #050A30 0%, #162356 100%)', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <MotionBox
            textAlign="center"
            mb={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <MotionTypography 
              variant="overline"
              sx={{ 
                color: '#5DBEFF',
                fontWeight: 'bold',
                letterSpacing: 2,
                fontSize: '1rem'
              }}
              variants={fadeIn}
            >
              OUR EXPERTISE
            </MotionTypography>
            
            <MotionTypography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                background: 'linear-gradient(90deg, #FFFFFF 0%, #B4C7ED 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              variants={fadeIn}
            >
              Comprehensive Services
            </MotionTypography>
            
            <MotionTypography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                color: '#B4C7ED', 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: '1.1rem'
              }}
              variants={fadeIn}
            >
              We offer a wide range of services to meet your digital needs, from web and mobile development to cloud solutions and cybersecurity.
            </MotionTypography>
          </MotionBox>
          
          <MotionGrid 
            container 
            spacing={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionCard 
                  variants={fadeIn}
                  sx={{ 
                    height: '100%',
                    background: 'rgba(18, 32, 80, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    border: '1px solid rgba(93, 190, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(76, 73, 234, 0.3)',
                      '& .icon-wrapper': {
                        background: 'linear-gradient(135deg, #5DBEFF 0%, #4C49EA 100%)',
                        transform: 'scale(1.1)'
                      }
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box 
                      className="icon-wrapper"
                      sx={{ 
                        width: '70px',
                        height: '70px',
                        borderRadius: '15px',
                        background: 'rgba(93, 190, 255, 0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 3,
                        color: '#5DBEFF',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {service.icon}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      fontWeight="bold"
                      sx={{ mb: 2 ,
                        backgroundImage: 'linear-gradient(90deg, #5DBEFF 0%, #4C49EA 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2"
                      sx={{ color: '#B4C7ED' }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                  
                  {/* Decorative elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(93, 190, 255, 0.1) 0%, rgba(76, 73, 234, 0) 70%)'
                    }}
                  />
                </MotionCard>
              </Grid>
            ))}
          </MotionGrid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{bgcolor:'#fff'}}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, bgcolor:'#fff' }}>
        <MotionBox
          textAlign="center"
          mb={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <MotionTypography 
            variant="overline"
            sx={{ 
              color: '#5DBEFF',
              fontWeight: 'bold',
              letterSpacing: 2,
              fontSize: '1rem'
            }}
            variants={fadeIn}
          >
            {/* MEET OUR TEAM */}
          </MotionTypography>
          
          <MotionTypography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold',
              mb: 2,
              backgroundImage: 'linear-gradient(90deg, #5DBEFF 0%, #4C49EA 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
            }}
            variants={fadeIn}
          >
            The Minds Behind Our Success
          </MotionTypography>
          
          <MotionTypography 
            variant="body1" 
            sx={{ 
              mb: 3, 
              color: '#000', 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: '1.1rem'
            }}
            variants={fadeIn}
          >
            Our talented team combines creativity, technical expertise, and industry knowledge to deliver exceptional results.
          </MotionTypography>
        </MotionBox>
        
        <MotionGrid 
          container 
          spacing={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard 
                variants={fadeIn}
                sx={{ 
                  height: '100%',
                  background: 'rgba(18, 32, 80, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '1px solid rgba(93, 190, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(76, 73, 234, 0.3)',
                    '& .member-image': {
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  className="member-image"
                  sx={{ 
                    height: 240,
                    transition: 'all 0.5s ease'
                  }}
                />
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    fontWeight="bold"
                    sx={{ mb: 1 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ color: '#5DBEFF' }}
                  >
                    {member.position}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </MotionGrid>
      </Container>
      </Box>

      {/* Stats Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #050A30 0%, #162356 100%)',
          py: { xs: 6, md: 8 } 
        }}
      >
        <Container maxWidth="lg">
          <MotionGrid 
            container 
            spacing={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            {[
              { number: "50+", label: "Completed Projects" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "10+", label: "Expert Team Members" },
              // { number: "12+", label: "Industry Awards" }
            ].map((stat, index) => (
              <Grid item xs={6} md={4} key={index}>
                <MotionBox 
                  variants={fadeIn}
                  sx={{ 
                    textAlign: 'center',
                    p: 3,
                    borderRadius: '15px',
                    height: '100%',
                    background: 'rgba(93, 190, 255, 0.1)',
                    border: '1px solid rgba(93, 190, 255, 0.2)',
                  }}
                >
                  <MotionTypography 
                    variant="h3" 
                    component="p" 
                    fontWeight="bold"
                    sx={{ 
                      mb: 1,
                      background: 'linear-gradient(90deg, #FFFFFF 0%, #5DBEFF 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </MotionTypography>
                  <Typography variant="body2" sx={{ color: '#B4C7ED' }}>
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </MotionGrid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <MotionCard 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          sx={{ 
            background: 'linear-gradient(135deg, #162356 0%, #050A30 100%)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 80px rgba(93, 190, 255, 0.2)',
            position: 'relative'
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <MotionTypography 
                  variant="h3" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2,
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #B4C7ED 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  variants={fadeIn}
                >
                  Ready to Transform Your Digital Presence?
                </MotionTypography>
                
                <MotionTypography 
                  variant="body1" 
                  sx={{ mb: 4, color: '#B4C7ED', fontSize: '1.1rem' }}
                  variants={fadeIn}
                >
                  Let's discuss how our expert team can help bring your vision to life with innovative solutions tailored to your unique needs.
                </MotionTypography>
                
                <MotionBox
                  variants={fadeIn}
                >
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      background: 'linear-gradient(90deg, #5DBEFF 0%, #4C49EA 100%)',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.5,
                      mr: 2,
                      '&:hover': {
                        background: 'linear-gradient(90deg, #4C49EA 0%, #5DBEFF 100%)',
                      }
                    }}
                    onClick={handleClick}
                  >
                    Get In Touch
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      borderColor: '#5DBEFF',
                      color: '#5DBEFF',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: '#4C49EA',
                        background: 'rgba(76, 73, 234, 0.1)'
                      }
                    }}
                    onClick={handleClicks}
                  >
                    Git START
                  </Button>
                </MotionBox>
              </Grid>
              
              <Grid item xs={12} md={5}>
                <MotionBox
                  variants={fadeIn}
                  sx={{ 
                    position: 'relative',
                    height: { xs: '200px', md: '300px' },
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  {/* Abstract shapes */}
                  {[1, 2, 3, 4].map((item) => (
                    <MotionBox
                      key={item}
                      animate={{ 
                        rotate: [0, 360],
                        x: [0, 10, -10, 0],
                        y: [0, -10, 10, 0]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 10 + item * 2,
                        ease: "linear"
                      }}
                      sx={{
                        position: 'absolute',
                        top: `${20 * item}%`,
                        left: `${15 * item}%`,
                        width: `${80 - item * 10}px`,
                        height: `${80 - item * 10}px`,
                        borderRadius: item % 2 === 0 ? '20%' : '50%',
                        background: `rgba(93, 190, 255, ${0.1 * item})`,
                        filter: 'blur(5px)'
                      }}
                    />
                  ))}
                </MotionBox>
              </Grid>
            </Grid>
          </CardContent>
        </MotionCard>
      </Container>
      <Footer/>
    </Box>
    </Box>
  );
};

export default AboutUs;