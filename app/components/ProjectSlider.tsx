'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  Launch,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';

// Animation styles
const slideStyles = {
  entering: { opacity: 0, transform: 'translateX(50px)' },
  entered: { opacity: 1, transform: 'translateX(0)' },
  exiting: { opacity: 0, transform: 'translateX(-50px)' },
  exited: { opacity: 0, display: 'none' },
};

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const project = projects[activeIndex];

  return (
    <Box sx={{ position: 'relative', width: '100%', pb: 6 }}>
      <Box 
        sx={{ 
          maxWidth: 900, 
          mx: 'auto',
          px: 2
        }}
      >
        <Card
          elevation={2}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: '100%', md: '50%' },
              height: { xs: 200, md: 350 },
              objectFit: 'cover'
            }}
            image={project.image}
            alt={project.title}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '50%' } }}>
            <CardContent sx={{ flexGrow: 1, p: 4 }}>
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                {project.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {project.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    sx={{
                      fontSize: '0.75rem',
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      fontWeight: 500
                    }}
                  />
                ))}
              </Box>
            </CardContent>
            <CardActions sx={{ p: 3, pt: 0 }}>
              <Button 
                variant="outlined"
                size="medium" 
                startIcon={<GitHub />}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Button>
              <Button 
                variant="contained"
                size="medium" 
                startIcon={<Launch />}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </CardActions>
          </Box>
        </Card>

        {/* Navigation dots */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 4,
            gap: 1
          }}
        >
          {projects.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === activeIndex 
                  ? theme.palette.primary.main
                  : theme.palette.grey[300],
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: index === activeIndex 
                    ? theme.palette.primary.main
                    : theme.palette.grey[400],
                }
              }}
            />
          ))}
        </Box>

        {/* Nav buttons */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 1, sm: 2, md: 3 },
            pointerEvents: 'none', // So it doesn't interfere with card interactions
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{ 
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.background.paper,
              },
              pointerEvents: 'auto', // Make the button clickable
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{ 
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.background.paper,
              },
              pointerEvents: 'auto', // Make the button clickable
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
} 