'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Container, 
  Paper,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Send as SendIcon
} from '@mui/icons-material';

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    setErrors(prev => ({
      ...prev,
      [name]: false
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);
    
    if (!Object.values(newErrors).some(Boolean)) {
      // Form is valid, submit it
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      // Show error message
      setSnackbar({
        open: true,
        message: 'Please fill out all fields correctly.',
        severity: 'error'
      });
    }
  };
  
  const handleSnackbarClose = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };
  
  return (
    <Container maxWidth="lg" id="contact">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          fontWeight: 700,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '60px',
            height: '4px',
            bottom: '-16px',
            left: 'calc(50% - 30px)',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '2px'
          }
        }}
      >
        Get In Touch
      </Typography>
      
      <Box sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        mx: -2,
        gap: { xs: 4, md: 0 }
      }}>
        <Box sx={{ 
          width: { xs: '100%', md: '40%' },
          px: 2
        }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: '100%',
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark
                      }
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      <a href="mailto:your.email@example.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        your.email@example.com
                      </a>
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark
                      }
                    }}
                  >
                    <PhoneIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Phone
                    </Typography>
                    <Typography variant="body1">
                      <a href="tel:+15551234567" style={{ color: 'inherit', textDecoration: 'none' }}>
                        (555) 123-4567
                      </a>
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark
                      }
                    }}
                  >
                    <LocationIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Location
                    </Typography>
                    <Typography variant="body1">
                      San Francisco, CA
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ mt: 6 }}>
              <Typography variant="h6" gutterBottom>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <IconButton
                  color="primary"
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    border: `1px solid ${theme.palette.primary.main}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff'
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    border: `1px solid ${theme.palette.primary.main}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff'
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Box>
        
        <Box sx={{ 
          width: { xs: '100%', md: '60%' },
          px: 2
        }}>
          <Paper
            elevation={0}
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 4,
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Send Me a Message
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? 'Name is required' : ''}
              />
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? 'Valid email is required' : ''}
              />
              
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={5}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                helperText={errors.message ? 'Message is required' : ''}
              />
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  mt: 2,
                  alignSelf: 'flex-start',
                  borderRadius: '8px',
                  fontWeight: 600,
                  boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,118,255,0.23)'
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
} 