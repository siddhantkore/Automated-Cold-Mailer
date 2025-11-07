const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const dataPath = path.join(__dirname, '..', 'data.json');


const sendMessage = async (req, res) => {
  try {
    console.log("sendMessage hit:", req.body);
    const { mail, mobile, whom, why, preview } = req.body;

    if (!mail || !whom || !why || !preview) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Parse multiple email addresses
    // Support both comma-separated and newline-separated emails
    const emailList = mail
      .split(/[,\n]/)
      .map(email => email.trim())
      .filter(email => email.length > 0 && email.includes('@'));

    if (emailList.length === 0) {
      return res.status(400).json({ error: 'No valid email addresses found' });
    }

    console.log("emails:", emailList);
    console.log("mobile:", mobile);
    console.log("whom:", whom);
    console.log("why:", why);
    console.log("preview:", preview);

    // Read existing data
    // we will be implementing MongoDB later
    let jsonData = [];
    if (fs.existsSync(dataPath)) {
      const fileContent = fs.readFileSync(dataPath, 'utf8');
      if (fileContent) {
        jsonData = JSON.parse(fileContent);
      }
    }

    // Add new message(s) - one entry per recipient
    emailList.forEach(email => {
      jsonData.push({ 
        mail: email, 
        mobile, 
        whom, 
        why, 
        preview, 
        timestamp: new Date() 
      });
    });
    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2));

    // For above lines to run Perfectly without crashing the server
    // We must not use nodemon else it will keep restarting on every write

    // Email config validation
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10);
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const canSendEmail = Boolean(emailHost && emailPort && emailUser && emailPass);

    console.log("Email config:", {
      host: emailHost,
      port: emailPort,
      user: emailUser,
      configured: canSendEmail,
      pass: emailPass
    });

    let previewUrls = [];
    let emailSent = false;
    let emailsSentCount = 0;
    let emailsFailedCount = 0;

    console.log("Preparing to send emails to", emailList.length, "recipient(s)...");

    if (canSendEmail) {
      const transporter = nodemailer.createTransport({
        host: emailHost,
        port: emailPort,
        secure: false,
        auth: { user: emailUser, pass: emailPass },
      });

      console.log("Transporter created, sending emails...");

      // Send emails to all recipients
      const emailPromises = emailList.map(async (email) => {
        try {
          const info = await transporter.sendMail({
            from: emailUser,
            to: email,
            subject: preview.subject,
            text: preview.body,
            html: `<p>${preview.body.replace(/\n/g, '<br>')}</p>`,
          });
          const previewUrl = nodemailer.getTestMessageUrl(info);
          console.log(`Email sent to ${email}: ${info.messageId}`);
          if (previewUrl) {
            previewUrls.push({ email, previewUrl });
          }
          emailsSentCount++;
          return { success: true, email, messageId: info.messageId };
        } catch (sendErr) {
          console.error(`SMTP send failed for ${email}:`, sendErr);
          emailsFailedCount++;
          return { success: false, email, error: sendErr.message };
        }
      });

      const results = await Promise.all(emailPromises);
      emailSent = emailsSentCount > 0;
      
      console.log(`Email sending complete: ${emailsSentCount} sent, ${emailsFailedCount} failed`);
    } else {
      console.warn('Email not sent: SMTP credentials are not fully configured.');
    }

    // SMS placeholder
    if (mobile) {
      console.log(`--- SMS Placeholder ---`);
      console.log(`Sending SMS to: ${mobile}`);
      console.log(`Message: ${preview.subject}`);
      console.log(`--- End SMS Placeholder ---`);
    }

    const responseMessage = emailSent 
      ? `Data saved. Emails sent to ${emailsSentCount} recipient(s)${emailsFailedCount > 0 ? `, ${emailsFailedCount} failed` : ''}.`
      : 'Data saved. Email sending skipped (SMTP not configured).';

    return res.status(200).json({ 
      message: responseMessage,
      previewUrls: previewUrls.length > 0 ? previewUrls : undefined,
      emailsSent: emailsSentCount,
      emailsFailed: emailsFailedCount,
      totalRecipients: emailList.length,
      emailSent 
    });
  } catch (err) {
    console.error('sendMessage handler failed:', err);
    // Ensure we never throw; client still gets a response
    // return res.status(200).json({ message: 'Data saved (with warnings)', emailSent: false, error: String(err && err.message || err) });
  }
};

module.exports = sendMessage;