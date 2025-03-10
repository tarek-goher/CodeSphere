import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  useTheme,
  useMediaQuery,
  IconButton,
  Snackbar,
  Alert,
  Divider,
  Paper,
  Link // استيراد مكون Link
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import contactAnimation from '../../animation/Animation - 1739885266202 (1).json';
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

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Formspree integration - make sure the form ID is correct
  const [state, handleSubmit] = useForm("xeoajryr");
  
  // Form state for controlled inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Form validation
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // تعديل وظيفة إرسال النموذج لضمان إرسال جميع الحقول بشكل صحيح
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للنموذج
    
    // التحقق من صحة البيانات
    if (!validateForm()) {
      return;
    }
    
    // إنشاء كائن FormData للإرسال
    const formDataObj = new FormData(e.target);
    
    // التأكد من إضافة حقل subject بشكل صريح
    if (formData.subject) {
      formDataObj.append('subject', formData.subject);
    }
    
    try {
      // استخدام handleSubmit مباشرة مع الحدث
      await handleSubmit(e);
      
      // إذا وصلنا هنا، فقد نجح الإرسال (اختياري: إظهار رسالة نجاح إضافية)
      console.log("Form submitted successfully with all fields:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  const handleCloseSnackbar = () => {
    // For the success message after submission
    window.location.reload(); // Reload the page to reset form state
  };
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: "Our Location",
      details: ["Soon", "    ", "   "],
      color: theme.palette.primary.main
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email Us",
      details: [
        // إضافة رابط البريد الإلكتروني مع mailto
        <Link 
          href="mailto:digitalapplica@gmail.com" 
          underline="hover" 
          key="email-link"
          sx={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            color: 'text.secondary',
            '&:hover': { color: theme.palette.secondary.main }
          }}
        >
          digitalapplica@gmail.com
        </Link>
      ],
      color: theme.palette.secondary.main
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Call Us",
      details: [
        // إضافة رابط الهاتف مع tel
        <Link 
          href="tel:01146109626" 
          underline="hover" 
          key="phone-link1"
          sx={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            color: 'text.secondary',
            '&:hover': { color: theme.palette.success.main }
          }}
        >
          01146109626
        </Link>,
        // إضافة رابط الهاتف الثاني مع tel
        <Link 
          href="tel:01146109626" 
          underline="hover" 
          key="phone-link2"
          sx={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            color: 'text.secondary',
            '&:hover': { color: theme.palette.success.main }
          }}
        >
          01146109626
        </Link>,
        "st-Fri: 9am-6pm"
      ],
      color: theme.palette.success.main
    }
  ];

  return (
   <div>
     <Box sx={{pb:9}}>
     <Nav/>
     </Box>
     <Container maxWidth="lg" sx={{ py: 8 }}>
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
            background: 'linear-gradient(45deg, #3f51b5, #f44336)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 2
          }}
        >
          Get In Touch
        </Typography>
      </MotionBox>
      
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{ mb: 6 }}
      >
        <Typography variant="h6" align="center" color="textSecondary" paragraph sx={{color:"#fff"}}>
          Have a question or want to work together? We'd love to hear from you!
        </Typography>
      </MotionBox>
      
      <Grid container spacing={5}>
        {/* Contact Information Cards */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={3} direction="column">
            {contactInfo.map((info, index) => (
              <Grid item key={index}>
                <MotionBox
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      borderLeft: `4px solid ${info.color}`,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme.shadows[6]
                      }
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          color: 'white',
                          bgcolor: info.color,
                          borderRadius: '50%',
                          p: 1,
                          display: 'flex',
                          mr: 2
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography variant="h5" component="h3" fontWeight="500">
                        {info.title}
                      </Typography>
                    </Box>
                    
                    <Box ml={6}>
                      {info.details.map((detail, i) => (
                        <Typography key={i} color="textSecondary" sx={{ mb: 0.5 }}>
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        {/* Contact Form with Formspree integration */}
        <Grid item xs={12} md={7}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                  <Box 
                    sx={{ 
                      bgcolor: theme.palette.primary.main,
                      py: 2,
                      px: 3,
                      color: 'white'
                    }}
                  >
                    <Typography variant="h5" component="h3">
                      Send Us a Message
                    </Typography>
                    <Typography variant="body2">
                      We'll get back to you as soon as possible
                    </Typography>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    {state.succeeded ? (
                      <Alert 
                        severity="success" 
                        variant="filled"
                        sx={{ width: '100%' }}
                      >
                        Your message has been sent successfully! We'll get back to you soon.
                      </Alert>
                    ) : (
                      <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Your Name"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              fullWidth
                              required
                              error={!!errors.name}
                              helperText={errors.name}
                              variant="outlined"
                              size="small"
                            />
                            <ValidationError 
                              prefix="Name" 
                              field="name"
                              errors={state.errors}
                            />
                          </Grid>
                          
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Your Email"
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              fullWidth
                              required
                              error={!!errors.email}
                              helperText={errors.email}
                              variant="outlined"
                              size="small"
                            />
                            <ValidationError 
                              prefix="Email" 
                              field="email"
                              errors={state.errors}
                            />
                          </Grid>
                          
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Phone Number"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              fullWidth
                              variant="outlined"
                              size="small"
                            />
                            <ValidationError 
                              prefix="Phone" 
                              field="phone"
                              errors={state.errors}
                            />
                          </Grid>
                          
                          <Grid item xs={12} sm={6}>
                            <TextField
                              label="Subject"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              fullWidth
                              variant="outlined"
                              size="small"
                            />
                            <ValidationError 
                              prefix="Subject" 
                              field="subject"
                              errors={state.errors}
                            />
                          </Grid>
                          
                          <Grid item xs={12}>
                            <TextField
                              label="Your Message"
                              id="message"
                              name="message"
                              multiline
                              rows={3}
                              value={formData.message}
                              onChange={handleChange}
                              fullWidth
                              required
                              error={!!errors.message}
                              helperText={errors.message}
                              variant="outlined"
                              size="small"
                            />
                            <ValidationError 
                              prefix="Message" 
                              field="message"
                              errors={state.errors}
                            />
                          </Grid>
                          
                          <Grid item xs={12}>
                            <MotionBox
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="medium"
                                endIcon={<SendIcon />}
                                fullWidth
                                disabled={state.submitting}
                                sx={{ 
                                  py: 1,
                                  boxShadow: 3,
                                  fontWeight: 'medium',
                                  fontSize: '1rem',
                                  background: 'linear-gradient(45deg, #3f51b5, #1a237e)'
                                }}
                              >
                                {state.submitting ? 'Sending...' : 'Send Message'}
                              </Button>
                            </MotionBox>
                          </Grid>
                        </Grid>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>

            {/* Animation moved below the form */}
            <Grid item>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    mt: 2
                  }}
                >
                  {!isMobile && (
                    <Box sx={{ width: '100%', maxWidth: 300 }}>
                      <Lottie options={defaultOptions} />
                    </Box>
                  )}
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      {/* Google Map */}
      {/* <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        sx={{ mt: 6 }}
      >
        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Typography 
            variant="h5" 
            component="h3" 
            sx={{ p: 3, borderBottom: `1px solid ${theme.palette.divider}` }}
          >
            Our Location
          </Typography>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.0188669530213!2d-122.0840158!3d37.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x8808889f23d45a!2sGoogle!5e0!3m2!1sen!2sus!4v1651265903287!5m2!1sen!2sus"
            sx={{
              border: 0,
              width: '100%',
              height: '450px',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Paper>
      </MotionBox> */}
    </Container>
    <Footer/>
   </div>
  );
};

export default ContactPage;