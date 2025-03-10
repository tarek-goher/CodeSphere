import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BrushIcon from '@mui/icons-material/Brush';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../Footer/Footer';

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Custom responsive websites with modern technologies and SEO optimization.",
      icon: <LaptopMacIcon />,
      bgColor: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Visually appealing interfaces that enhance user experience and engagement.",
      icon: <BrushIcon />,
      bgColor: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
    },
    {
      id: 2,
      title: "Mobile Applications",
      description: "Native and cross-platform apps for iOS and Android with intuitive UI/UX.",
      icon: <PhoneIphoneIcon />,
      bgColor: 'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)'
    },
    // {
    //   id: 3,
    //   title: "Desktop Applications",
    //   description: "Powerful software solutions for Windows, macOS, and Linux platforms.",
    //   icon: <DesktopWindowsIcon />,
    //   bgColor: 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)'
    // },
 
  ];

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 8 }, 
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.03" fill-rule="evenodd"/%3E%3C/svg%3E")',
          pointerEvents: 'none'
        }
      }}
      id="services"
    >
      <Container maxWidth="lg">
        <Box 
          textAlign="center" 
          mb={{ xs: 5, md: 6 }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography 
            variant="overline" 
            component="div"
            sx={{ 
              color: '#64ffda',
              letterSpacing: 2,
              fontWeight: 500,
              mb: 1
            }}
          >
            WHAT WE OFFER
          </Typography>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700, 
              color: '#ffffff',
              fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3.2rem' },
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: { xs: '80px', md: '120px' },
                height: '4px',
                background: 'linear-gradient(90deg, #64ffda 0%, #1976d2 100%)',
                bottom: '-16px',
                left: 'calc(50% - 60px)',
                borderRadius: '4px'
              }
            }}
          >
            Our Premium Services
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          {services.map((service) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              lg={4} 
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-delay={service.id * 100}
              data-aos-duration="800"
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: hoveredService === service.id ? 
                    '0 15px 35px rgba(0,0,0,0.3), 0 0 20px rgba(100, 255, 218, 0.3)' : 
                    '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredService === service.id ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)'
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Box 
                  sx={{ 
                    background: service.bgColor,
                    py: 3,
                    px: 3,
                    display: 'flex', 
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '150px',
                      height: '150px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      top: '-75px',
                      right: '-75px'
                    }
                  }}
                >
                  <Paper
                    elevation={5}
                    sx={{
                      borderRadius: '50%',
                      width: 60,
                      height: 60,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      mr: 2,
                      transition: 'transform 0.3s ease',
                      transform: hoveredService === service.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
                      '& svg': {
                        fontSize: 28,
                        color: '#ffffff',
                        filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))'
                      }
                    }}
                  >
                    {service.icon}
                  </Paper>
                  <Box>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{ 
                        fontWeight: 700, 
                        color: '#ffffff',
                        position: 'relative',
                        zIndex: 2,
                        fontSize: '1.1rem',
                        lineHeight: 1.2
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    p: 3,
                    background: 'rgba(25, 25, 35, 0.6)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)', 
                      mb: 2,
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      flex: 1
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  {/* <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: '#64ffda',
                      borderColor: 'rgba(100, 255, 218, 0.3)',
                      borderRadius: '50px',
                      textTransform: 'none',
                      py: 0.5,
                      px: 2,
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      alignSelf: 'flex-start',
                      '&:hover': {
                        borderColor: '#64ffda',
                        background: 'rgba(100, 255, 218, 0.05)'
                      }
                    }}
                    endIcon={<ArrowForwardIcon fontSize="small" />}
                  >
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
};

export default ServicesSection;