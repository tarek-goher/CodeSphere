import React, { useEffect } from 'react';
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
  Chip
} from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import Nav from '../Home/nav/Nav';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
// import imges from '../../assets/wep-img.jpg'
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 16px 70px -12px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          padding: '8px 24px',
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

const mainServices = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom websites designed to meet your business goals, optimized for performance, and scalable for future growth.',
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    // image: imges,
    features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'Analytics Integration'],
    color: '#3f51b5',
  },
  {
    id: 2,
    title: 'Mobile Application',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
    // image: 'https://source.unsplash.com/random/400x300/?mobile',
    features: ['Cross-Platform', 'Offline Functionality', 'Push Notifications', 'App Store Optimization'],
    color: '#f50057',
  },
  // {
  //   id: 3,
  //   title: 'Desktop Application',
  //   description: 'Powerful desktop software that streamlines operations, automates workflows, and boosts productivity.',
  //   icon: <DesktopWindowsIcon sx={{ fontSize: 40 }} />,
  //   image: 'https://source.unsplash.com/random/400x300/?desktop',
  //   features: ['Cross-OS Support', 'Offline Processing', 'Database Integration', 'Auto-Updates'],
  //   color: '#00b0ff',
  // },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality, creating intuitive and engaging digital experiences.',
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    // image: 'https://i.pinimg.com/736x/14/22/31/1422316ba149f1a986182b9e4b3864e3.jpg',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    color: '#4caf50',
  },
];

const additionalServices = [
  {
    id: 5,
    title: 'Custom API Development',
    description: 'Scalable and secure API solutions to connect your systems and enable seamless data exchange.',
    icon: <CodeIcon />,
  },
  {
    id: 6,
    title: 'Database Solutions',
    description: 'Efficient database design, implementation, and maintenance for optimal data management.',
    icon: <StorageIcon />,
  },
  {
    id: 7,
    title: 'E-commerce Solutions',
    description: 'Feature-rich online stores with secure payment gateways, inventory management, and marketing tools.',
    icon: <ShoppingCartIcon />,
  },
  {
    id: 8,
    title: 'Security Audits',
    description: 'Comprehensive security analysis to identify vulnerabilities and strengthen your digital assets.',
    icon: <SecurityIcon />,
  },
];

const ServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Contact');
  };
  return (
    <Box sx={{backgroundColor:'#10131d'}}>
      <Box sx={{pb:2 , background:'#'}}>
        <Nav   dashbord={false}/>
    </Box>
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: '#10131d', py: 8 }}>
        <Container>
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Our Services
              </Typography>
              <Typography variant="h6" color="#fff" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
                We provide end-to-end digital solutions to help transform your business
                with cutting-edge technology and exceptional user experiences.
              </Typography>
              <Divider sx={{ mb: 4, maxWidth: 100, mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
            </Box>
          </motion.div>

          {/* Main Services */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <Grid container spacing={3} >
              {mainServices.map((service) => (
                <Grid item xs={12} md={4} key={service.id}>
                  <motion.div variants={itemVariants}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {/* <CardMedia
                        component="img"
                        height="200"
                        image="/api/placeholder/800/600"
                        alt={service.title}
                      /> */}
                      <Box sx={{ 
                        p: 1, 
                        bgcolor: service.color,
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <Box sx={{ 
                          bgcolor: 'white', 
                          borderRadius: '50%', 
                          width: 90, 
                          height: 100,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: service.color,
                          mt: -4,
                          boxShadow: 3
                        }}>
                          {service.icon}
                        </Box>
                      </Box>
                      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                        <Typography variant="h5" component="h2" gutterBottom align="center">
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" paragraph>
                          {service.description}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                          <Grid container spacing={1}>
                            {service.features.map((feature, index) => (
                              <Grid item key={index}>
                                <Chip 
                                  label={feature} 
                                  size="small" 
                                  sx={{ 
                                    bgcolor: `${service.color}20`,
                                    color: service.color,
                                    fontWeight: 500
                                  }} 
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </CardContent>
                      <Box sx={{ p: 2, pt: 0 }}>
                        {/* <Button 
                          variant="contained" 
                          fullWidth
                          sx={{ 
                            bgcolor: service.color,
                            '&:hover': {
                              bgcolor: `${service.color}dd`,
                            }
                          }}
                        >
                          Learn More
                        </Button> */}
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Additional Services */}
          <Box sx={{ mt: 10, mb: 6 }}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            >
              <Typography variant="h4" align="center" gutterBottom sx={{ background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',}}>
                Additional Services
              </Typography>
              <Typography variant="body1" align="center" color="#fff" sx={{ mb: 5, maxWidth: 800, mx: 'auto' }}>
                Explore our specialized services designed to complement and enhance your digital solutions.
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              <Grid container spacing={3}>
                {additionalServices.map((service) => (
                  <Grid item xs={12} sm={6} md={3} key={service.id}>
                    <motion.div variants={itemVariants}>
                      <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                        <Box sx={{ mb: 2, color: 'primary.main' }}>
                          {service.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {service.description}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>

          {/* Tech Stack Section */}
          <Box sx={{ mt: 10, mb: 6 }}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            >
              <Typography variant="h4" align="center" gutterBottom sx={{ background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',}}>
                Our Technology Stack
              </Typography>
              <Typography variant="body1" align="center" color="#fff" sx={{ mb: 5, maxWidth: 800, mx: 'auto' }}>
                We leverage cutting-edge technologies to build robust, scalable, and maintainable solutions.
              </Typography>
            </motion.div>

            <Box sx={{ 
              py: 4, 
              px: { xs: 2, md: 6 }, 
              bgcolor: 'background.paper', 
              borderRadius: 4,
              boxShadow: 1,
            }}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main' 
                    }}>
                      <SpeedIcon fontSize="large" />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      Performance Optimized
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Our solutions are built with performance in mind, ensuring fast load times and smooth operation.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main' 
                    }}>
                      <DevicesIcon fontSize="large" />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      Cross-Platform Compatible
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Applications that work seamlessly across all devices and operating systems.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main' 
                    }}>
                      <SecurityIcon fontSize="large" />
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      Security-First Approach
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      We implement industry-standard security practices to protect your data and users.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <Box sx={{ 
              mt: 10, 
              textAlign: 'center', 
              p: { xs: 4, md: 8 }, 
              borderRadius: 4,
              background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
              color: 'white',
              boxShadow: 3,
            }}>
              <Typography variant="h4" gutterBottom>
                Ready to Transform Your Business?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
                Let's discuss how our services can help you achieve your business goals. 
                Our team of experts is ready to create a tailored solution for your specific needs.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  }
                }}
                onClick={handleClick}
              >
                Contact Us Today
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </ThemeProvider>
    <Footer/>
    </Box>
  );
};

export default ServicesPage;