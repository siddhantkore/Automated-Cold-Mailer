import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Cold Mailer. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          Built by{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 500,
              color: 'text.primary',
            }}
          >
            Nival Cloud Solutions
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
