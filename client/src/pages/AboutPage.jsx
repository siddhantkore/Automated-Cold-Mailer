import React from 'react';
import { Typography, Container, Box, Paper, Grid, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BusinessIcon from '@mui/icons-material/Business';

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: { xs: 3, md: 5 } }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'text.primary',
          }}
        >
          About Cold Mailer
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: 'text.secondary',
            mb: 6,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          Revolutionizing cold email outreach with AI-powered personalization
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'divider',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <EmailIcon sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Our Mission
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                Cold Mailer was created to solve a common problem: how to reach out to prospects 
                professionally and effectively without spending hours crafting each message. We believe 
                that every business deserves access to powerful outreach tools that can help them grow 
                and connect with their target audience.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid',
                borderColor: 'divider',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <AutoAwesomeIcon sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Our Technology
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                Powered by advanced large language models, Cold Mailer uses cutting-edge AI to understand 
                context, tone, and purpose. Our algorithms analyze your requirements and generate emails 
                that are not just personalized, but also professional, engaging, and tailored to your 
                specific use case.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            border: '1px solid',
            borderColor: 'divider',
            mb: 6,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 3,
              color: 'text.primary',
            }}
          >
            What We Offer
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                AI-Powered Email Generation
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Generate professional cold emails in seconds using advanced AI. Simply provide recipient 
                details and purpose, and our system creates personalized content.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Full Editing Control
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Review and customize every generated email before sending. Edit subject lines, body content, 
                and tone to match your brand voice perfectly.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Direct Email & SMS Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Send emails and SMS messages directly from the platform. No need to copy-paste or use 
                multiple tools - everything is integrated.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Campaign Management
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Track all your communications in one place. Save recipient information, message history, 
                and campaign data for future reference and analysis.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            border: '1px solid',
            borderColor: 'divider',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <BusinessIcon sx={{ fontSize: 24, color: 'white' }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Built by Nival Cloud Solutions
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Cold Mailer is a product of Nival Cloud Solutions, a company specializing in DevOps expertise, 
            cloud infrastructure, and automation solutions. We combine our technical expertise with 
            innovative AI technology to deliver tools that help businesses scale efficiently.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            Our team is committed to providing reliable, secure, and user-friendly solutions that empower 
            businesses to focus on what they do best while we handle the technical complexity.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutPage;
