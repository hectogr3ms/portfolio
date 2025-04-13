import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface GridProps extends BoxProps {
  children: React.ReactNode;
  spacing?: number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}

export function GridContainer({ children, spacing = 2, ...rest }: GridProps) {
  const getSpacing = () => {
    if (typeof spacing === 'number') {
      return spacing * 8; // Convert to pixels (MUI spacing unit is 8px)
    }
    
    return {
      xs: spacing.xs !== undefined ? spacing.xs * 8 : 16,
      sm: spacing.sm !== undefined ? spacing.sm * 8 : undefined,
      md: spacing.md !== undefined ? spacing.md * 8 : undefined,
      lg: spacing.lg !== undefined ? spacing.lg * 8 : undefined,
      xl: spacing.xl !== undefined ? spacing.xl * 8 : undefined,
    };
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: typeof getSpacing() === 'number' 
          ? `-${getSpacing() / 2}px` 
          : {
              xs: `-${getSpacing().xs / 2}px`,
              ...(getSpacing().sm && { sm: `-${getSpacing().sm / 2}px` }),
              ...(getSpacing().md && { md: `-${getSpacing().md / 2}px` }),
              ...(getSpacing().lg && { lg: `-${getSpacing().lg / 2}px` }),
              ...(getSpacing().xl && { xl: `-${getSpacing().xl / 2}px` }),
            },
        width: 'calc(100% + 16px)',
        ...rest.sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

interface GridItemProps extends BoxProps {
  children: React.ReactNode;
  xs?: number; // 1-12 for width percentage
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export function GridItem({ children, xs = 12, sm, md, lg, xl, ...rest }: GridItemProps) {
  const getWidth = (columns: number) => `${(columns / 12) * 100}%`;
  
  return (
    <Box
      sx={{
        flexBasis: {
          xs: getWidth(xs),
          ...(sm && { sm: getWidth(sm) }),
          ...(md && { md: getWidth(md) }),
          ...(lg && { lg: getWidth(lg) }),
          ...(xl && { xl: getWidth(xl) }),
        },
        flexGrow: 0,
        maxWidth: {
          xs: getWidth(xs),
          ...(sm && { sm: getWidth(sm) }),
          ...(md && { md: getWidth(md) }),
          ...(lg && { lg: getWidth(lg) }),
          ...(xl && { xl: getWidth(xl) }),
        },
        padding: 1, // Default padding
        ...rest.sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
} 