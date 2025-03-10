import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    projectDescription: '',
    budget: '',
    timeframe: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
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
      if (activeStep === steps.length - 1) {
        handleSubmit();
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setLoading(true);
    
    // Create new submission with status and timestamp
    const newSubmission = {
      ...formData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      status: 'new',
    };
    
    // Get existing submissions from localStorage or initialize empty array
    const existingSubmissions = JSON.parse(localStorage.getItem('projectSubmissions') || '[]');
    
    // Add new submission to array
    const updatedSubmissions = [newSubmission, ...existingSubmissions];
    
    // Save to localStorage
    localStorage.setItem('projectSubmissions', JSON.stringify(updatedSubmissions));
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Wait for success message to display before redirecting
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
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
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  variant="outlined"
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
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  error={!!errors.serviceType}
                  helperText={errors.serviceType}
                  variant="outlined"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Description"
                  name="projectDescription"
                  multiline
                  rows={4}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  error={!!errors.projectDescription}
                  helperText={errors.projectDescription}
                  variant="outlined"
                  placeholder="Please describe your project requirements in detail"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Budget Range"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  error={!!errors.budget}
                  helperText={errors.budget}
                  variant="outlined"
                  placeholder="e.g. $5,000 - $10,000"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleChange}
                  error={!!errors.timeframe}
                  helperText={errors.timeframe}
                  variant="outlined"
                  placeholder="e.g. 3 months"
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
                  <Typography variant="subtitle1">Full Name:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.fullName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Email:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Phone Number:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.phoneNumber}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Service Type:</Typography>
                  <Typography variant="body1" gutterBottom>
                    {serviceTypes.find(s => s.value === formData.serviceType)?.label || ''}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Project Description:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.projectDescription}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Budget:</Typography>
                  <Typography variant="body1" gutterBottom>{formData.budget}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1">Timeframe:</Typography>
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
                  endIcon={activeStep === steps.length - 1 ? <SendIcon /> : null}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : activeStep === steps.length - 1 ? (
                    'Submit'
                  ) : (
                    'Next'
                  )}
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your project inquiry has been submitted successfully! We'll contact you soon.
        </Alert>
      </Snackbar>
    </ThemeProvider>
  </div>
  );
};

export default ClientContactForm;