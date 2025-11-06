import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';

const HowItWorksSection = ({ steps }) => {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: 'text.primary',
        }}
      >
        How It Works
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: 'text.secondary',
          mb: 6,
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        Get started in three simple steps
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;

