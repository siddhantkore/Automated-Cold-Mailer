const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const dataPath = path.join(__dirname, '..', 'data.json');


const sendMessage = async (req, res) => {
  console.log("sendMessage hit:", req.body);
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

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT), // Port is a string, so parse it to an integer
      secure: false, // Use 'false' for port 587 with STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Email config:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
    });


    const info = await transporter.sendMail({
      from: 'megastorage2112@gmail.com',
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