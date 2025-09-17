import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Automated Cold Mail Sender
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Generate personalized cold emails and SMS messages with the power of AI.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/dashboard"
          sx={{ mt: 4 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
