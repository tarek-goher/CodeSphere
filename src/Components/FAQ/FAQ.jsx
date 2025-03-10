import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Grid,
  Paper,
  Fade,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DevicesIcon from '@mui/icons-material/Devices';
import { motion } from 'framer-motion';
import Nav from '../Home/nav/Nav';
import Footer from '../Home/Footer/Footer';

// Wrapper component for Framer Motion
const MotionBox = ({ children, ...props }) => {
  return (
    <Box component={motion.div} {...props}>
      {children}
    </Box>
  );
};

const FAQPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // FAQ categories
  const categories = [
    { 
      title: 'Web Development', 
      icon: <WebIcon fontSize="large" />,
      color: '#3f51b5',
      faqs: [
        {
          question: 'What technologies do you use for web development?',
          answer: 'We utilize modern technologies including React, Angular, Vue.js, and Next.js for frontend development. For backend, we work with Node.js, Django, Ruby on Rails, and ASP.NET Core depending on project requirements.'
        },
        {
          question: 'How long does it take to develop a website?',
          answer: 'Development timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications may require 3-6 months. We provide detailed timelines during project scoping.'
        },
        {
          question: 'Do you offer website maintenance services?',
          answer: 'Yes, we provide ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. Our maintenance plans include regular updates, security patches, performance optimization, and content updates.'
        }
      ]
    },
    {
      title: 'Mobile App Development',
      icon: <PhoneAndroidIcon fontSize="large" />,
      color: '#f44336',
      faqs: [
        {
          question: 'Do you develop for both iOS and Android?',
          answer: 'Yes, we develop native applications for both iOS and Android platforms. We also offer cross-platform solutions using React Native or Flutter to reduce development time and cost while maintaining excellent performance.'
        },
        {
          question: 'How do you handle app store submissions?',
          answer: 'We manage the entire submission process for both Apple App Store and Google Play Store. This includes preparing all required assets, descriptions, screenshots, and handling any review feedback until your app is successfully published.'
        },
        {
          question: 'Can you update my existing mobile application?',
          answer: 'Absolutely. We can work with your existing codebase to add new features, improve performance, update designs, or fix issues. We ll begin with a code review to understand the current state and recommend the best approach'
        },
      ]
    },
    {
      title: 'Desktop Applications',
      icon: <DevicesIcon fontSize="large" />,
      color: '#4caf50',
      faqs: [
        {
          question: 'What platforms do your desktop applications support?',
          answer: 'We develop desktop applications for Windows, macOS, and Linux. We can create platform-specific applications or cross-platform solutions using technologies like Electron or .NET MAUI depending on your requirements.'
        },
        {
          question: 'How do you handle updates for desktop applications?',
          answer: 'We implement automatic update systems that securely deliver updates to users. Our solutions include features like background downloads, version management, and rollback capabilities to ensure a smooth user experience.'
        },
        {
          question: 'Can you integrate with existing systems?',
          answer: 'Yes, our desktop applications can integrate with existing databases, APIs, and business systems. We design robust integration solutions that ensure reliable data exchange and synchronization across your entire technology stack.'
        }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <CodeIcon fontSize="large" />,
      color: '#ff9800',
      faqs: [
        {
          question: 'What is your design process?',
          answer: 'Our design process includes research, wireframing, prototyping, visual design, and usability testing. We collaborate closely with clients at each stage to ensure the final design meets both user needs and business objectives.'
        },
        {
          question: 'Do you provide design systems?',
          answer: 'Yes, we create comprehensive design systems that include component libraries, style guides, and documentation. These systems ensure consistency across your products and accelerate future development while maintaining design integrity.'
        },
        {
          question: 'How do you ensure designs are accessible?',
          answer: 'Accessibility is built into our design process. We follow WCAG guidelines and best practices to ensure our designs work for all users, including those with disabilities. This includes considerations for color contrast, keyboard navigation, screen readers, and more.'
        }
      ]
    }
  ];

  return (
   <div>
     <Box sx={{pb:9}}>
     <Nav/>
     </Box>
     <Container id='Faq' maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #3f51b5, #f44336, #4caf50, #ff9800)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 6
          }}
        >
          Frequently Asked Questions
        </Typography>
      </MotionBox>

      <Box sx={{ mb: 6 }}>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h6" align="center" color="textSecondary" paragraph sx={{
             background: 'linear-gradient(45deg, #3f51b5, #f44336, #4caf50,rgb(24, 132, 175))',
             backgroundClip: 'text',
             textFillColor: 'transparent',
          }}>
            Find answers to common questions about our services, process, and technologies.
            If you can't find what you're looking for, please contact our support team.
          </Typography>
        </MotionBox>
      </Box>

      <Grid container spacing={4}>
        {categories.map((category, categoryIndex) => (
          <Grid item xs={12} md={6} key={categoryIndex}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  overflow: 'hidden',
                  height: '100%',
                  borderTop: `4px solid ${category.color}`,
                  borderRadius: '8px'
                }}
              >
                <Box 
                  sx={{ 
                    p: 3, 
                    display: 'flex', 
                    alignItems: 'center',
                    background: `linear-gradient(145deg, ${category.color}15, ${category.color}05)`,
                  }}
                >
                  <Box sx={{ 
                    color: category.color, 
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center' 
                  }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h5" component="h2" fontWeight="bold">
                    {category.title}
                  </Typography>
                </Box>
                
                <Box>
                  {category.faqs.map((faq, faqIndex) => (
                    <Accordion 
                      key={faqIndex}
                      expanded={expanded === `${categoryIndex}-${faqIndex}`}
                      onChange={handleChange(`${categoryIndex}-${faqIndex}`)}
                      disableGutters
                      sx={{ 
                        '&:before': { display: 'none' },
                        boxShadow: 'none',
                        borderBottom: faqIndex < category.faqs.length - 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: category.color }} />}
                        sx={{ 
                          px: 3,
                          '&.Mui-expanded': {
                            minHeight: '48px',
                            bgcolor: `${category.color}08`,
                          },
                        }}
                      >
                        <Typography fontWeight="500">
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3, py: 2 }}>
                        <Fade in={expanded === `${categoryIndex}-${faqIndex}`}>
                          <Typography color="text.secondary">
                            {faq.answer}
                          </Typography>
                        </Fade>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Paper>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
      
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        sx={{ mt: 8, textAlign: 'center' }}
      >
        <Typography variant="h5" gutterBottom sx={{color:"#fff"}}>
          Still have questions?
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{color:"#fff"}}>
          Contact our support team and we'll get back to you as soon as possible.
        </Typography>
        
      </MotionBox>

    </Container>
    <Footer/>
   </div>
  );
};

export default FAQPage;