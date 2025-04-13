'use client';

import React from 'react';
import { Box, Typography, Paper, Container, useTheme } from '@mui/material';
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Layers as FrontendIcon,
  Terminal as BackendIcon,
  Cloud as CloudIcon,
  Build as ToolsIcon
} from '@mui/icons-material';

// Define the skills data
const skillsData = [
  {
    category: "Frontend",
    icon: <FrontendIcon fontSize="large" color="primary" />,
    skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <BackendIcon fontSize="large" color="primary" />,
    skills: ["Node.js", "Express", "Python", "Django", "FastAPI", "PHP", "Laravel"]
  },
  {
    category: "Database",
    icon: <DatabaseIcon fontSize="large" color="primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma"]
  },
  {
    category: "DevOps",
    icon: <CloudIcon fontSize="large" color="primary" />,
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "Nginx"]
  },
  {
    category: "Tools",
    icon: <ToolsIcon fontSize="large" color="primary" />,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Jest", "Webpack", "npm/yarn"]
  },
  {
    category: "Languages",
    icon: <CodeIcon fontSize="large" color="primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C++", "SQL"]
  }
];

export default function Skills() {
  const theme = useTheme();
  
  return (
    <Container maxWidth="lg" id="skills">
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
        My Skills
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -2 }}>
        {skillsData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '50%', md: '33.333%' },
              px: 2,
              mb: 4,
              display: 'flex'
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                width: '100%',
                height: '100%',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {item.icon}
              </Box>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ 
                  fontWeight: 600, 
                  color: theme.palette.text.primary,
                  mb: 2
                }}
              >
                {item.category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {item.skills.map((skill, i) => (
                  <Box
                    key={i}
                    sx={{
                      py: 0.5,
                      px: 1.5,
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      borderRadius: 4,
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
} 