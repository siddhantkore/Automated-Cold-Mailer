import React from 'react';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ my: { xs: 4, md: 8 } }}>
        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: 'text.primary',
            }}
          >
            Login
          </Typography>
          <Box component="form">
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
