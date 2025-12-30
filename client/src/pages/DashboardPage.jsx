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
  const [editedSubject, setEditedSubject] = useState('');
  const [editedBody, setEditedBody] = useState('');

  const generatePreview = async () => {
    try {
      const response = await axios.post('/api/generate-content', {
        whom,
        why,
      });
      setPreview(response.data.preview);
      setEditedSubject(response.data.preview?.subject || '');
      setEditedBody(response.data.preview?.body || '');
    } catch (error) {
      console.error('Error generating preview:', error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('/api/send-message', {
        mail,
        mobile,
        whom,
        why,
        preview: {
          subject: editedSubject || preview?.subject || '',
          body: editedBody || preview?.body || '',
        },
      });
      
      // Show detailed success message
      const successMsg = response.data.message || 
        `Emails sent to ${response.data.emailsSent || 0} recipient(s) successfully!`;
      alert(successMsg);
      
      // Store preview URLs if available
      if (response.data.previewUrls && response.data.previewUrls.length > 0) {
        setPreviewUrl(response.data.previewUrls);
      } else {
        setPreviewUrl(null);
      }
      setMail('');
      setMobile('');
      setWhom('');
      setWhy('');
      setPreview(null);
      setEditedSubject('');
      setEditedBody('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.', error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(30, 64, 175, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: { xs: 3, md: 5 } }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 4,
            color: 'text.primary',
          }}
        >
          Dashboard
        </Typography>
        <Paper
          sx={{
            p: { xs: 2, md: 3 },
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
            Recipient Information
          </Typography>
          <TextField
            label="Recipient Email(s)"
            fullWidth
            margin="normal"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            variant="outlined"
            multiline
            rows={3}
            placeholder="Enter one or more email addresses, separated by commas or new lines&#10;Example: email1@example.com, email2@example.com&#10;Or:&#10;email1@example.com&#10;email2@example.com"
            helperText="You can enter multiple email addresses separated by commas or new lines"
          />
          <TextField
            label="Recipient Mobile"
            fullWidth
            margin="normal"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="Whom to send?"
            fullWidth
            margin="normal"
            value={whom}
            onChange={(e) => setWhom(e.target.value)}
            variant="outlined"
            placeholder='Name of Recipient'
          />
          <TextField
            label="Why to send?"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={why}
            onChange={(e) => setWhy(e.target.value)}
            variant="outlined"
            placeholder='i.e. Subject'
          />
          <Button
            variant="contained"
            color="primary"
            onClick={generatePreview}
            sx={{ mt: 3 }}
            fullWidth
            size="large"
          >
            Generate Preview
          </Button>
        </Paper>
        {preview && (
          <Paper
            sx={{
              p: { xs: 2, md: 3 },
              mt: 4,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Email Preview
            </Typography>
            <TextField
              label="Subject"
              fullWidth
              margin="normal"
              value={editedSubject}
              onChange={(e) => setEditedSubject(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Body"
              fullWidth
              multiline
              minRows={8}
              margin="normal"
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              variant="outlined"
            />
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                mt: 3,
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={generatePreview}
                sx={{ flex: { xs: '1 1 100%', sm: '0 1 auto' } }}
              >
                Regenerate
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={sendMessage}
                sx={{ flex: { xs: '1 1 100%', sm: '0 1 auto' } }}
              >
                Send
              </Button>
            </Box>
          </Paper>
        )}
        {previewUrl && (
          <Paper
            sx={{
              p: { xs: 2, md: 3 },
              mt: 4,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Email Preview URLs
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {Array.isArray(previewUrl) 
                ? `Preview links for ${previewUrl.length} email(s):`
                : 'An email has been sent to a test account. You can view it at the following link:'}
            </Typography>
            {Array.isArray(previewUrl) ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {previewUrl.map((item, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {item.email}:
                    </Typography>
                    <Link
                      href={item.previewUrl}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {item.previewUrl}
                    </Link>
                  </Box>
                ))}
              </Box>
            ) : (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {previewUrl}
              </Link>
            )}
          </Paper>
        )}
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
