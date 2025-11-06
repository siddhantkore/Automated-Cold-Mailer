import React from 'react';
import { Button, Typography, Container, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SendIcon from '@mui/icons-material/Send';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import BarChartIcon from '@mui/icons-material/BarChart';
import WhyChooseSection from '../components/WhyChooseSection';
import HowItWorksSection from '../components/HowItWorksSection';

const LandingPage = () => {
  return (
    <Box>
      {/* Hero Section with Background */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Cold Mailer
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                fontWeight: 400,
                mb: 3,
                opacity: 0.95,
              }}
            >
              Automated Cold Email Sender
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                maxWidth: '700px',
                mx: 'auto',
                mb: 5,
                lineHeight: 1.8,
                opacity: 0.9,
              }}
            >
              Generate personalized cold emails and SMS messages with the power of AI. 
              Streamline your outreach and connect with prospects more effectively.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/dashboard"
              sx={{
                mt: 2,
                px: 5,
                py: 1.75,
                fontSize: '1.1rem',
                fontWeight: 600,
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.95)',
                },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Get Started
            </Button>
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                opacity: 0.8,
                fontStyle: 'italic',
              }}
            >
              Powered by Nival Cloud Solutions
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Why Choose Section */}
        <WhyChooseSection
          features={[
            {
              icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'white' }} />,
              title: 'AI-Powered Generation',
              description: 'Leverage advanced AI to create personalized, professional cold emails tailored to your recipient and purpose. No more generic templates.',
            },
            {
              icon: <EmailIcon sx={{ fontSize: 32, color: 'white' }} />,
              title: 'Edit Before Sending',
              description: 'Review and customize generated content before sending. Full control over your message with real-time editing capabilities.',
            },
            {
              icon: <SendIcon sx={{ fontSize: 32, color: 'white' }} />,
              title: 'Direct Delivery',
              description: 'Send emails and SMS messages directly from the platform. Track and manage your outreach campaigns with ease.',
            },
            {
              icon: <SpeedIcon sx={{ fontSize: 32, color: 'white' }} />,
              title: 'Fast & Efficient',
              description: 'Generate professional emails in seconds. Save hours of manual work and focus on what matters most - building relationships.',
            },
            {
              icon: <SecurityIcon sx={{ fontSize: 32, color: 'white' }} />,
              title: 'Secure & Reliable',
              description: 'Your data is safe with us. We use industry-standard security practices to protect your information and communications.',
            },
            {
              icon: <BarChartIcon sx={{ fontSize: 32, color: 'white' }} />,
              title: 'Track Performance',
              description: 'Monitor your email campaigns and track engagement. Make data-driven decisions to improve your outreach strategy.',
            },
          ]}
        />

        {/* How It Works Section */}
        <HowItWorksSection
          steps={[
            {
              title: 'Enter Details',
              description: 'Provide recipient information and the purpose of your outreach. Our AI will understand the context.',
            },
            {
              title: 'Generate & Edit',
              description: 'AI generates a personalized email. Review and customize it to match your style before sending.',
            },
            {
              title: 'Send & Track',
              description: 'Send your email directly from the platform and track its delivery. All your communications are saved for reference.',
            },
          ]}
        />

        {/* CTA Section */}
        <Paper
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Transform Your Outreach?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            Start creating professional cold emails in minutes. No credit card required.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/dashboard"
            sx={{
              px: 5,
              py: 1.75,
              fontSize: '1.1rem',
              fontWeight: 600,
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.95)',
              },
            }}
          >
            Get Started Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default LandingPage;
