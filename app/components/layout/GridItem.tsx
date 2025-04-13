import React from 'react';
import { Grid, GridProps } from '@mui/material';

type CustomGridProps = {
  children: React.ReactNode;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean; 
  lg?: number | boolean;
  xl?: number | boolean;
};

export default function GridItem({ children, xs, sm, md, lg, xl, ...rest }: CustomGridProps & Omit<GridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>) {
  return (
    <Grid 
      item 
      {...rest}
    >
      {children}
    </Grid>
  );
} 