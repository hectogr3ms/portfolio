'use client';

import React from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Container maxWidth="lg" sx={{ width: '100%' }}>
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          mx: -2,
          gap: { xs: 6, md: 0 }
        }}
      >
        <Box 
          sx={{ 
            width: { xs: '100%', md: '50%' },
            px: 2
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Hi, I'm Brandon
            </Typography>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 500,
                color: 'text.secondary',
                mb: 3
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.1rem' },
                mb: 4,
                maxWidth: { xs: '100%', md: '500px' },
                mx: { xs: 'auto', md: 0 }
              }}
            >
              I create beautiful and functional web applications using modern technologies.
              Passionate about building user-friendly experiences and solving complex problems.
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' } 
              }}
            >
              <Button
                variant="contained"
                startIcon={<GitHub />}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                size={isMobile ? "medium" : "large"}
                sx={{
                  py: { xs: 1, md: 1.5 },
                  px: { xs: 3, md: 4 }
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                size={isMobile ? "medium" : "large"}
                sx={{
                  py: { xs: 1, md: 1.5 },
                  px: { xs: 3, md: 4 }
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<Email />}
                href="mailto:your.email@example.com"
                size={isMobile ? "medium" : "large"}
                sx={{
                  py: { xs: 1, md: 1.5 },
                  px: { xs: 3, md: 4 }
                }}
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Box>
        <Box 
          sx={{ 
            width: { xs: '100%', md: '50%' },
            px: 2
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(33, 150, 243, 0.03)',
              borderRadius: '20px',
              height: { xs: '300px', md: '400px' },
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(33, 150, 243, 0.1)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0) 60%)',
                transform: 'rotate(0deg)',
                animation: 'rotate 20s linear infinite',
              },
              '@keyframes rotate': {
                '0%': {
                  transform: 'rotate(0deg)',
                },
                '100%': {
                  transform: 'rotate(360deg)',
                },
              },
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                position: 'relative',
                color: theme.palette.primary.main,
                fontWeight: 500,
                textAlign: 'center',
                px: 4,
                maxWidth: '400px',
                opacity: 0.9
              }}
            >
              Let's build something amazing together
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
} 