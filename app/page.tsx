'use client';

import React from 'react';
import { Box, Container, ThemeProvider } from '@mui/material';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import theme from './theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Navbar />
        
        <Box component="main">
          <Box 
            component="section" 
            id="hero" 
            sx={{ 
              pt: { xs: 10, sm: 12, md: 16 },
              pb: { xs: 6, sm: 8, md: 10 },
            }}
          >
            <Hero />
          </Box>
          
          <Box 
            component="section" 
            id="skills" 
            sx={{ 
              py: { xs: 6, sm: 8, md: 10 },
              backgroundColor: theme.palette.background.paper,
              borderTop: `1px solid ${theme.palette.divider}`,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Skills />
          </Box>
          
          <Box 
            component="section" 
            id="projects" 
            sx={{ 
              py: { xs: 6, sm: 8, md: 10 },
            }}
          >
            <Projects />
          </Box>
          
          <Box 
            component="section" 
            id="contact" 
            sx={{ 
              py: { xs: 6, sm: 8, md: 10 },
              backgroundColor: theme.palette.background.paper,
              borderTop: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Contact />
          </Box>
        </Box>
        
        <Box 
          component="footer"
          sx={{
            py: 4,
            textAlign: 'center',
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                fontSize: '0.875rem',
                color: theme.palette.text.secondary,
              }}
            >
              © {new Date().getFullYear()} Brandon's Portfolio. All rights reserved.
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
