import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider, 
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Facebook, 
  Instagram,
  LocationOn,
  Phone,
  Email,
  WhatsApp,
  ArrowForward
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  // وظيفة لتمرير الصفحة إلى الأعلى عند النقر على الرابط
  const scrollToTop = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    { name: "Website Development" },
    { name: "UI/UX Design" },
    { name: "Mobile App Development" },
    { name: "E-commerce Solutions" },
  ];

  const resources = [
    { name: "About Us", link: "/AboutUs" },
    { name: "Contact Us", link: "/Contact" },
    { name: "FAQ", link: "/FAQ" },
  ];

  const company = [
    { name: "About Us", link: "/AboutUs" },
    { name: "Service", link: "/Service" },
    { name: "Contact", link: "/Contact" },
    { name: "Privacy Policy", link: "/Privacy" },
  ];

  // Decorative line component
  const DecorativeLine = () => (
    <Box sx={{
      width: '40px',
      height: '3px',
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      borderRadius: '10px',
      my: 1.5,
    }} />
  );

  // Social icons with custom styling for no spacing
  const socialIcons = [
    { icon: <Facebook />, color: '#', label: 'facebook', link: 'https://www.facebook.com/profile.php?id=100064817331076' },
    { icon: <Instagram />, color: '#', label: 'instagram', link: 'https://www.instagram.com'},
    { icon: <WhatsApp />, color: '#', label: 'whatsapp', link: 'https://wa.me/yourphonenumber'},
    { icon: <Email />, color: '#', label: 'email', link: 'mailto:digitalapplica@gmail.com' }, 
  ];

  return (
    <Box sx={{ 
      bgcolor: '#0a1929', 
      color: 'white',
      pt: 6,
      pb: 3,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              background: 'linear-gradient(45deg, #426dc5, #5dc2bc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              CodeSphere
            </Typography>
            <DecorativeLine />
            <Typography variant="body2" sx={{ mb: 2, color: '#adb5bd' }}>
              Professional web, mobile, and desktop application development services. We create cutting-edge solutions with modern design and excellent user experience.
            </Typography>
            
            {/* Social icons */}
            <Box sx={{ mt: 3, display: 'flex', gap:2 }}>
              {socialIcons.map((item, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    backgroundColor: item.color,
                    color: 'white',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: index === 0 ? '4px 0 0 4px' : index === socialIcons.length - 1 ? '0 4px 4px 0' : '0',
                    '&:hover': {
                      opacity: 0.9
                    }
                  }}
                >
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Services - جعل الروابط غير فعالة */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <DecorativeLine />
            {services.map((service, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Box 
                  sx={{ 
                    color: '#adb5bd', 
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} />
                  <Typography variant="body2">{service.name}</Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
              Resources
            </Typography>
            <DecorativeLine />
            {resources.map((resource, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Box 
                  onClick={() => scrollToTop(resource.link)} 
                  sx={{ 
                    color: '#adb5bd', 
                    '&:hover': { 
                      color: '#2196F3',
                      transition: 'color 0.3s',
                      cursor: 'pointer'
                    },
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} />
                  <Typography variant="body2">{resource.name}</Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <DecorativeLine />
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <LocationOn sx={{ mr: 1, fontSize: 20, color: '#2196F3' }} />
                <Typography variant="body2" sx={{ color: '#adb5bd' }}>
                  New Cairo
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Phone sx={{ mr: 1, fontSize: 20, color: '#2196F3' }} />
                <Link href="tel:+01146109626" sx={{ color: '#adb5bd', textDecoration: 'none' }}>
                  <Typography variant="body2">
                    +01146109626
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Email sx={{ mr: 1, fontSize: 20, color: '#2196F3' }} />
                <Link href="mailto:digitalapplica@gmail.com" sx={{ color: '#adb5bd', textDecoration: 'none' }}>
                  <Typography variant="body2">
                    digitalapplica@gmail.com
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />
        
        {/* Bottom Footer */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" sx={{ color: '#adb5bd', textAlign: isMobile ? 'center' : 'left' }}>
              © {new Date().getFullYear()} CodeSphere. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', mt: isMobile ? 1 : 0 }}>
            {company.slice(0, isMobile ? 2 : company.length).map((item, index) => (
              <React.Fragment key={index}>
                <Typography 
                  variant="body2" 
                  onClick={() => scrollToTop(item.link)}
                  sx={{ 
                    color: '#adb5bd', 
                    '&:hover': { 
                      color: '#2196F3', 
                      transition: 'color 0.3s',
                      cursor: 'pointer'
                    }, 
                    fontSize: '0.75rem' 
                  }}
                >
                  {item.name}
                </Typography>
                {index < (isMobile ? 1 : company.length - 1) && (
                  <Typography variant="body2" sx={{ mx: 1, color: '#adb5bd' }}>|</Typography>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;