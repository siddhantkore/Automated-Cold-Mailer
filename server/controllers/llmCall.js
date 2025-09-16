
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

// --- LLM Integration ---
// Make sure to set the GEMINI_API_KEY environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const generateContent = async (req, res) => {
  const { whom, why } = req.body;

  if (!whom || !why) {
    return res.status(400).json({ error: 'Missing required fields: whom, why' });
  }

  const prompt = `
    Based on the following information, generate a professional and concise cold email.
    The output should be a JSON object with two fields: "subject" and "body".

    Recipient: "${whom}"
    Reason for contact: "${why}"

    Example JSON output:
    {
      "subject": "Collaboration Opportunity",
      "body": "Dear ${whom},\n\nI am writing to you today because...\n\nSincerely,\n[Your Name]"
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // The model might return the JSON wrapped in markdown, so we need to clean it.
    const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const generatedContent = JSON.parse(cleanedText);

    res.json({ preview: generatedContent });

  } catch (error) {
    console.error('Error generating content with LLM:', error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
};

module.exports = generateContent;