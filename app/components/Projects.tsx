'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Container,
  useTheme
} from '@mui/material';
import ProjectSlider from './ProjectSlider';

// Project data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, with product management, cart functionality, user authentication, and payment processing.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking charts.",
    image: "https://via.placeholder.com/600x400?text=Task+Management+App",
    technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-app-demo.example.com"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard showing forecasts, historical data, and location-based weather alerts using multiple weather APIs.",
    image: "https://via.placeholder.com/600x400?text=Weather+Dashboard",
    technologies: ["JavaScript", "React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-demo.example.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio website built with Next.js and Material UI to showcase projects and skills.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    technologies: ["Next.js", "Material-UI", "TypeScript", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.example.com"
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform with rich text editing, comment system, and user authentication.",
    image: "https://via.placeholder.com/600x400?text=Blog+Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-demo.example.com"
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application that allows users to track workouts, set goals, and visualize progress over time.",
    image: "https://via.placeholder.com/600x400?text=Fitness+Tracker",
    technologies: ["React Native", "Firebase", "D3.js", "Expo"],
    github: "https://github.com/yourusername/fitness-tracker",
    demo: "https://fitness-demo.example.com"
  }
];

export default function Projects() {
  const theme = useTheme();
  
  return (
    <Container maxWidth="lg" id="projects">
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
        My Projects
      </Typography>
      
      <ProjectSlider projects={projects} />
      
    </Container>
  );
} 