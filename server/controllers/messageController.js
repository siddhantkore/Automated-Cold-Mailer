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

    console.log("mail:", mail);
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

    // // Add new message
    jsonData.push({ mail, mobile, whom, why, preview, timestamp: new Date() });
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

    let previewUrl = undefined;
    let emailSent = false;

    console.log("Preparing to send email...");

    if (canSendEmail) {
      const transporter = nodemailer.createTransport({
        host: emailHost,
        port: emailPort,
        secure: false,
        auth: { user: emailUser, pass: emailPass },
      });

      console.log("Transporter created, sending email...");

      try {
        const info = await transporter.sendMail({
          from: emailUser,
          to: mail,
          subject: preview.subject,
          text: preview.body,
          html: `<p>${preview.body.replace(/\n/g, '<br>')}</p>`,
        });
        console.log("Email sent, generating preview URL...");
        previewUrl = nodemailer.getTestMessageUrl(info);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', previewUrl);
        emailSent = true;
      } catch (sendErr) {
        console.error('SMTP send failed:', sendErr);
      }
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

    return res.status(200).json({ message: 'Data saved', previewUrl, emailSent });
  } catch (err) {
    console.error('sendMessage handler failed:', err);
    // Ensure we never throw; client still gets a response
    // return res.status(200).json({ message: 'Data saved (with warnings)', emailSent: false, error: String(err && err.message || err) });
  }
};

module.exports = sendMessage;