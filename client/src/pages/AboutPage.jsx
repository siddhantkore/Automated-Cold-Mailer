import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          This application is designed to automate the process of sending cold emails and SMS messages. By leveraging the power of large language models, we can generate personalized and effective messages to reach your target audience.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
