import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Divider, 
  Fade, 
  Zoom, 
  Button,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SecurityIcon from '@mui/icons-material/Security';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ShieldIcon from '@mui/icons-material/Shield';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import HttpsIcon from '@mui/icons-material/Https';
import GavelIcon from '@mui/icons-material/Gavel';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import Nav from '../Home/nav/Nav';
import Footer from '../Home/Footer/Footer';

const Privacy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('.policy-section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const policyTopics = [
    { 
      id: 'introduction', 
      title: 'Introduction', 
      icon: <InfoIcon color="primary" />,
      content: 'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application. Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.'
    },
    { 
      id: 'information-collection', 
      title: 'Information We Collect', 
      icon: <DataUsageIcon color="primary" />,
      content: 'We may collect personal information that you voluntarily provide when interacting with our services, including but not limited to your name, email address, phone number, and payment information. We may also automatically collect certain information about your device, including your IP address, browser type, referring/exit pages, and operating system.'
    },
    { 
      id: 'how-we-use', 
      title: 'How We Use Your Information', 
      icon: <SecurityIcon color="primary" />,
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you related information including confirmations and invoices, respond to comments and questions, and provide customer support. We may also use your information to send you technical notices, updates, security alerts, and support and administrative messages.'
    },
    { 
      id: 'sharing-information', 
      title: 'Sharing Your Information', 
      icon: <PrivacyTipIcon color="primary" />,
      content: 'We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service. We may also share your information when required by law or to protect our rights, property, or safety, and the rights, property, and safety of others.'
    },
    { 
      id: 'data-security', 
      title: 'Data Security', 
      icon: <ShieldIcon color="primary" />,
      content: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.'
    },
    { 
      id: 'cookies', 
      title: 'Cookies and Tracking Technologies', 
      icon: <HttpsIcon color="primary" />,
      content: 'We may use cookies, pixel tags, web beacons, and other tracking technologies to collect information about you when you interact with our website or emails. This information may include information about your browsing behavior, preferences, and interests.'
    },
    { 
      id: 'your-rights', 
      title: 'Your Privacy Rights', 
      icon: <GavelIcon color="primary" />,
      content: 'Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your personal information or to receive a copy of your personal information in a structured, machine-readable format.'
    },
    { 
      id: 'contact-us', 
      title: 'Contact Us', 
      icon: <LockIcon color="primary" />,
      content: 'If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at privacy@yourcompany.com or by mail at Your Company, 123 Main Street, Anytown, USA.'
    }
  ];

  return (
   <Box>
    <Box sx={{pb:15 }}>
            <Nav />
        </Box>
     <Box sx={{ 
      minHeight: '100vh', 
      pt: 5,
      pb: 10
    }}>
      <Fade in={loaded} timeout={1000}>
        <Container maxWidth="lg">
          <Paper 
            elevation={24} 
            sx={{ 
              borderRadius: 4, 
              overflow: 'hidden',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Box 
              sx={{ 
                p: 6, 
                pb: 2,
                background: 'linear-gradient(90deg, #426dc5, #5dc2bc 100%)',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.1,
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              
              <Zoom in={loaded} timeout={1500}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  Privacy Policy
                </Typography>
              </Zoom>
              
              <Fade in={loaded} timeout={2000}>
                <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
                  We take your privacy seriously. This page outlines how we collect, use, and protect your data when using our website and mobile applications.
                </Typography>
              </Fade>
              
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  mb: 4
                }}
              >
                {policyTopics.map((topic, index) => (
                  <Zoom in={loaded} timeout={1000 + (index * 200)} key={topic.id}>
                    <Button
                      variant={activeSection === topic.id ? "contained" : "outlined"}
                      color="secondary"
                      onClick={() => scrollToSection(topic.id)}
                      sx={{ 
                        borderRadius: 8, 
                        px: 2,
                        backgroundColor: activeSection === topic.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          borderColor: 'white'
                        }
                      }}
                    >
                      {topic.title}
                    </Button>
                  </Zoom>
                ))}
              </Box>
            </Box>

            <Box sx={{ p: { xs: 2, md: 6 } }}>
              {isMobile ? (
                <Box sx={{ my: 4 }}>
                  {policyTopics.map((topic, index) => (
                    <Accordion 
                      key={topic.id}
                      id={topic.id}
                      className="policy-section"
                      sx={{ 
                        mb: 2, 
                        borderRadius: 2, 
                        overflow: 'hidden',
                        '&:before': { display: 'none' }
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ 
                          backgroundColor: theme.palette.primary.main, 
                          color: 'white',
                          '& .MuiAccordionSummary-expandIconWrapper': {
                            color: 'white'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          {topic.icon}
                          <Typography variant="h6">{topic.title}</Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body1" sx={{ py: 2 }}>
                          {topic.content}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              ) : (
                <Box sx={{ display: 'flex', gap: 4, my: 4 }}>
                  <Box sx={{ width: '25%', position: 'sticky', top: 100, alignSelf: 'flex-start' }}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                          Table of Contents
                        </Typography>
                        <List component="nav" sx={{ p: 0 }}>
                          {policyTopics.map((topic) => (
                            <ListItem 
                              button 
                              key={topic.id}
                              onClick={() => scrollToSection(topic.id)}
                              sx={{ 
                                borderRadius: 2,
                                mb: 1,
                                backgroundColor: activeSection === topic.id ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: 40 }}>
                                {topic.icon}
                              </ListItemIcon>
                              <ListItemText 
                                primary={topic.title}
                                primaryTypographyProps={{
                                  fontWeight: activeSection === topic.id ? 600 : 400
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Box>
                  
                  <Box sx={{ width: '75%' }}>
                    {policyTopics.map((topic, index) => (
                      <Fade in={loaded} timeout={1000 + (index * 300)} key={topic.id}>
                        <Box id={topic.id} className="policy-section" sx={{ mb: 6, scrollMarginTop: 120 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            {React.cloneElement(topic.icon, { fontSize: 'large' })}
                            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 0 }}>
                              {topic.title}
                            </Typography>
                          </Box>
                          <Divider sx={{ mb: 3 }} />
                          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
                            {topic.content}
                          </Typography>
                        </Box>
                      </Fade>
                    ))}
                  </Box>
                </Box>
              )}
              
              <Divider sx={{ my: 4 }} />
              
              <Box sx={{ textAlign: 'center', py: 3 }}>
                <Typography variant="body2" color="textSecondary">
                  Last updated: March 8, 2025
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  © 2025 Your Company Name. All rights reserved.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Fade>
    </Box>
   <Box sx={{mt:1}}>
   <Footer/>
   </Box>
   </Box>
  );
};

export default Privacy;