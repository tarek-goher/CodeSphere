import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery
} from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Nav from '../Home/nav/Nav';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

const serviceTypes = [
  { value: 'website', label: 'Website', icon: <WebIcon /> },
  { value: 'mobile', label: 'Mobile Application', icon: <PhoneIphoneIcon /> },
  { value: 'desktop', label: 'Desktop Application', icon: <DesktopWindowsIcon /> },
  { value: 'ui_ux', label: 'UI/UX Design', icon: <DesignServicesIcon /> },
];

const steps = ['Personal Information', 'Project Details', 'Confirmation'];

const ClientContactForm = () => {
  // Formspree integration - البيانات هتتبعت على الإيميل
  const [state, handleSubmit] = useForm("mrbyqvwg");
  
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Form state for controlled inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    projectDescription: '',
    budget: '',
    timeframe: '',
  });

  // Form validation
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (activeStep === 0) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    } else if (activeStep === 1) {
      if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
      if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
      if (!formData.budget.trim()) newErrors.budget = 'Budget information is required';
      if (!formData.timeframe.trim()) newErrors.timeframe = 'Timeframe is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // تعديل وظيفة إرسال النموذج بنفس طريقة صفحة الكونتاكت
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للنموذج
    
    // التحقق من صحة البيانات
    if (!validateStep()) {
      return;
    }
    
    try {
      // استخدام handleSubmit مباشرة مع الحدث
      await handleSubmit(e);
      
      // إذا وصلنا هنا، فقد نجح الإرسال
      console.log("Form submitted successfully with all fields:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseSnackbar = () => {
    // For the success message after submission
    window.location.reload(); // Reload the page to reset form state
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  variant="outlined"
                  required
                />
                <ValidationError 
                  prefix="Full Name" 
                  field="fullName"
                  errors={state.errors}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  variant="outlined"
                  required
                />
                <ValidationError 
                  prefix="Phone Number" 
                  field="phoneNumber"
                  errors={state.errors}
                />
              </Grid>
            </Grid>
          </motion.div>
        );
      
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Service Type"
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  error={!!errors.serviceType}
                  helperText={errors.serviceType}
                  variant="outlined"
                  required
                >
                  {serviceTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {option.icon}
                        <Box sx={{ ml: 1 }}>{option.label}</Box>
                      </Box>
                    </MenuItem>
                  ))}
                </TextField>
                <ValidationError 
                  prefix="Service Type" 
                  field="serviceType"
                  errors={state.errors}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Description"
                  id="projectDescription"
                  name="projectDescription"
                  multiline
                  rows={4}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  error={!!errors.projectDescription}
                  helperText={errors.projectDescription}
                  variant="outlined"
                  placeholder="Please describe your project requirements in detail"
                  required
                />
                <ValidationError 
                  prefix="Project Description" 
                  field="projectDescription"
                  errors={state.errors}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Budget Range"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  error={!!errors.budget}
                  helperText={errors.budget}
                  variant="outlined"
                  placeholder="e.g. $5,000 - $10,000"
                  required
                />
                <ValidationError 
                  prefix="Budget" 
                  field="budget"
                  errors={state.errors}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Timeframe"
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleChange}
                  error={!!errors.timeframe}
                  helperText={errors.timeframe}
                  variant="outlined"
                  placeholder="e.g. 3 months"
                  required
                />
                <ValidationError 
                  prefix="Timeframe" 
                  field="timeframe"
                  errors={state.errors}
                />
              </Grid>
            </Grid>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Review Your Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">Full Name:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.fullName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">Email:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">Phone Number:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.phoneNumber}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">Service Type:</Typography>
                  <Typography variant="body1" gutterBottom>
                    {serviceTypes.find(s => s.value === formData.serviceType)?.label || ''}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" fontWeight="bold">Project Description:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.projectDescription}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">Budget:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.budget}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">Timeframe:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.timeframe}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              By submitting this form, you agree to be contacted regarding your project inquiry.
            </Typography>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      <Box sx={{pb:15}}>
        <Nav/>
      </Box>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, mt: 4, mb: 4, borderRadius: 2 }}>
              <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
                Project Inquiry Form
              </Typography>
              
              <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? 'vertical' : 'horizontal'} sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              
              {state.succeeded ? (
                <Alert 
                  severity="success" 
                  variant="filled"
                  sx={{ width: '100%', mb: 3 }}
                >
                  Your project inquiry has been submitted successfully! We'll get back to you soon.
                </Alert>
              ) : (
                <>
                  {/* Form فقط في الخطوة الأخيرة */}
                  {activeStep === steps.length - 1 ? (
                    <form onSubmit={handleFormSubmit}>
                      {/* Hidden inputs لضمان إرسال جميع البيانات مع النموذج */}
                      <input type="hidden" name="fullName" value={formData.fullName} />
                      <input type="hidden" name="email" value={formData.email} />
                      <input type="hidden" name="phoneNumber" value={formData.phoneNumber} />
                      <input type="hidden" name="serviceType" value={formData.serviceType} />
                      <input type="hidden" name="projectDescription" value={formData.projectDescription} />
                      <input type="hidden" name="budget" value={`${formData.budget}`} />
                      <input type="hidden" name="timeframe" value={formData.timeframe} />
                      
                      {renderStepContent(activeStep)}
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon />}
                            disabled={state.submitting}
                            sx={{ 
                              py: 1,
                              px: 3,
                              boxShadow: 3,
                              fontWeight: 'medium',
                              fontSize: '1rem',
                              background: 'linear-gradient(45deg, #3f51b5, #1a237e)'
                            }}
                          >
                            {state.submitting ? 'Sending...' : 'Submit'}
                          </Button>
                        </motion.div>
                      </Box>
                    </form>
                  ) : (
                    <>
                      {renderStepContent(activeStep)}
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                          >
                            Next
                          </Button>
                        </motion.div>
                      </Box>
                    </>
                  )}
                </>
              )}
            </Paper>
          </motion.div>
        </Container>

        <Snackbar 
          open={state.succeeded} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Your project inquiry has been submitted successfully! We'll get back to you soon.
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  );
};

export default ClientContactForm;