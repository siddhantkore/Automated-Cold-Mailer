const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const generateContent = require('./llmCall')
const dataPath = path.join(__dirname, '..', 'data.json');


const sendMessage = async (req, res) => {
  const { mail, mobile, whom, why, preview } = req.body;

  if (!mail || !whom || !why || !preview) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  //Read existing data
  // we will be implementing MongoDB later
  let jsonData = [];
  if (fs.existsSync(dataPath)) {
    const fileContent = fs.readFileSync(dataPath, 'utf8');
    if (fileContent) {
      jsonData = JSON.parse(fileContent);
    }
  }

  // --- Add new message ---
  jsonData.push({ mail, mobile, whom, why, preview, timestamp: new Date() });
  fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2));

  // --- Send Email ---
  try {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: '"Your Name" <your.name@example.com>',
      to: mail,
      subject: preview.subject, // Using the generated subject
      text: preview.body, // Using the generated body
      html: `<p>${preview.body.replace(/\n/g, '<br>')}</p>`, // Using the generated body
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', previewUrl);

    // --- Send SMS (Placeholder) ---
    if (mobile) {
      console.log(`--- SMS Placeholder ---`);
      console.log(`Sending SMS to: ${mobile}`);
      console.log(`Message: ${preview.subject}`);
      console.log(`--- End SMS Placeholder ---`);
    }


    res.status(200).json({ message: 'Message sent and data saved!', previewUrl });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = sendMessage;