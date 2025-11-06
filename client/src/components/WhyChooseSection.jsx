import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';

const WhyChooseSection = ({ features }) => {
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
        Why Choose Cold Mailer?
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
        Everything you need to create, customize, and send professional cold emails in one platform.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 3, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseSection;

