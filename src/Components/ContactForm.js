// frontend/src/Components/ContactForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: 'website',
    budget: '',
    timeframe: '',
    projectDescription: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // التحقق من صحة البيانات المدخلة
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      setError('يرجى ملء جميع الحقول المطلوبة');
      setSubmitting(false);
      return;
    }

    // إضافة التحقق من صحة البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setError('يرجى إدخال بريد إلكتروني صحيح');
      setSubmitting(false);
      return;
    }

    try {
      // إرسال البيانات إلى API
      const response = await axios.post(`${API_URL}/projects`, formData);

      // تخزين البيانات محلياً كنسخة احتياطية (اختياري)
      const storedProjects = JSON.parse(localStorage.getItem('projectSubmissions') || '[]');
      localStorage.setItem('projectSubmissions', JSON.stringify([...storedProjects, response.data]));

      setSubmitSuccess(true);
      setSnackbarMessage('تم إرسال طلبك بنجاح!');

      // إعادة تعيين النموذج
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        serviceType: 'website',
        budget: '',
        timeframe: '',
        projectDescription: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setError('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.');
      setSnackbarMessage('حدث خطأ أثناء إرسال النموذج.');
    } finally {
      setSubmitting(false);
      setOpenSnackbar(true); // فتح الإشعار عند الانتهاء من الإرسال
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '400px', margin: '0 auto' }}>
      <TextField 
        label="الاسم الكامل" 
        name="fullName" 
        value={formData.fullName} 
        onChange={handleChange} 
        fullWidth 
        required 
        margin="normal"
      />
      <TextField 
        label="البريد الإلكتروني" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        fullWidth 
        required 
        margin="normal"
      />
      <TextField 
        label="رقم الهاتف" 
        name="phoneNumber" 
        value={formData.phoneNumber} 
        onChange={handleChange} 
        fullWidth 
        required 
        margin="normal"
      />
      <TextField 
        label="الميزانية" 
        name="budget" 
        value={formData.budget} 
        onChange={handleChange} 
        fullWidth 
        margin="normal"
      />
      <TextField 
        label="الوقت المتوقع" 
        name="timeframe" 
        value={formData.timeframe} 
        onChange={handleChange} 
        fullWidth 
        margin="normal"
      />
      <TextField 
        label="وصف المشروع" 
        name="projectDescription" 
        value={formData.projectDescription} 
        onChange={handleChange} 
        fullWidth 
        margin="normal"
      />
      
      {error && (
        <div className="error-message" style={{ color: 'red' }}>
          {error}
        </div>
      )}
      
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth
        disabled={submitting}
        style={{ marginTop: '20px' }}
      >
        {submitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
      </Button>

      {/* Snackbar للإشعارات */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={submitSuccess ? 'success' : 'error'}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default ContactForm;
