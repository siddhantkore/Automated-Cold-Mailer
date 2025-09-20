import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper, Link } from '@mui/material';
import axios from 'axios';

const DashboardPage = () => {
  const [mail, setMail] = useState('');
  const [mobile, setMobile] = useState('');
  const [whom, setWhom] = useState('');
  const [why, setWhy] = useState('');
  const [preview, setPreview] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const generatePreview = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/generate-content', {
        whom,
        why,
      });
      setPreview(response.data.preview);
    } catch (error) {
      console.error('Error generating preview:', error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/send-message', {
        mail,
        mobile,
        whom,
        why,
        preview,
      });
      alert('Message sent and data saved successfully!');
      setPreviewUrl(response.data.previewUrl);
      setMail('');
      setMobile('');
      setWhom('');
      setWhy('');
      setPreview(null);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.', error);
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Paper sx={{ p: 2 }}>
          <TextField
            label="Recipient Email"
            fullWidth
            margin="normal"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <TextField
            label="Recipient Mobile"
            fullWidth
            margin="normal"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <TextField
            label="Whom to send?"
            fullWidth
            margin="normal"
            value={whom}
            onChange={(e) => setWhom(e.target.value)}
          />
          <TextField
            label="Why to send?"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={why}
            onChange={(e) => setWhy(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={generatePreview}
            sx={{ mt: 2 }}
          >
            Generate Preview
          </Button>
        </Paper>
        {preview && (
          <Paper sx={{ p: 2, mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Preview
            </Typography>
            <Typography variant="h6" gutterBottom>
              Subject: {preview.subject}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {preview.body}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Paper>
        )}
        {previewUrl && (
          <Paper sx={{ p: 2, mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Email Preview
            </Typography>
            <Typography variant="body1">
              An email has been sent to a test account. You can view it at the following link:
            </Typography>
            <Link href={previewUrl} target="_blank" rel="noopener">
              {previewUrl}
            </Link>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default DashboardPage;
