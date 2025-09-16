import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Cold Mailer
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        <Link href="#" sx={{ mx: 1 }}>
          Telegram Bot
        </Link>
        <Link href="#" sx={{ mx: 1 }}>
          WhatsApp Bot
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
