'use client';

import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

// Navigation items
const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if scrolled down enough to change appearance
      setScrolled(currentScrollPos > 50);
      
      // Hide/show navbar based on scroll direction
      setVisible(
        (prevScrollPos > currentScrollPos) || // Scrolling up
        currentScrollPos < 100 || // At the top
        drawerOpen // Drawer is open
      );
      
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, drawerOpen]);
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      
      // Close drawer when clicking a link (mobile)
      if (drawerOpen) setDrawerOpen(false);
    }
  };
  
  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ textAlign: 'center', padding: 2 }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        mb: 2 
      }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Brandon
        </Typography>
        <IconButton edge="end" onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Divider sx={{ mb: 2 }} />
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemText 
              primary={item.name} 
              sx={{ 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  py: 1.5,
                  fontWeight: 500
                }
              }}
              onClick={(e) => {
                const link = document.createElement('a');
                link.href = item.href;
                scrollToSection({ ...e, currentTarget: link } as any);
              }}
            />
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ mt: 4 }}>
        <Button 
          variant="contained" 
          size="large"
          href="mailto:your.email@example.com"
          sx={{
            px: 3,
            py: 1,
            fontWeight: 600,
            borderRadius: 2
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
  
  return (
    <>
      <AppBar 
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled 
            ? theme.palette.background.paper 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.05)' 
            : 'none',
          borderBottom: scrolled 
            ? `1px solid ${theme.palette.divider}` 
            : 'none',
          transition: 'all 0.3s ease',
          color: theme.palette.text.primary,
          transform: visible ? 'translateY(0)' : 'translateY(-100%)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters 
            sx={{ 
              py: scrolled ? 1 : 1.5,
              transition: 'all 0.3s ease'
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700, 
                letterSpacing: '0.5px',
                color: scrolled ? theme.palette.text.primary : theme.palette.primary.main
              }}
            >
              Brandon
            </Typography>
            
            {/* Desktop navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  onClick={scrollToSection}
                  sx={{
                    mx: 1,
                    color: 'inherit',
                    fontWeight: 500,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '0',
                      left: '50%',
                      backgroundColor: theme.palette.primary.main,
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      '&::after': {
                        width: '80%'
                      }
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
              
              <Button 
                variant="contained" 
                href="#contact"
                onClick={scrollToSection}
                sx={{
                  ml: 2,
                  px: 2.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none'
                }}
              >
                Contact Me
              </Button>
            </Box>
            
            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: '100%', 
            maxWidth: '300px'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
} 