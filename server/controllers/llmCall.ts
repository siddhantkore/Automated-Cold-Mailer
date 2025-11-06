// import { Request, Response } from 'express';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { OpenAI } from 'openai';
// import dotenv from 'dotenv';
// dotenv.config();

// const geminiApiKey = process.env.GEMINI_API_KEY;
// if (!geminiApiKey) {
//   throw new Error('GEMINI_API_KEY environment variable is not set.');
// }

// const openaiApiKey = process.env.OPENAI_API_KEY;
// if (!openaiApiKey) {
//   throw new Error('OPENAI_API_KEY environment variable is not set.');
// }

// const genAI = new GoogleGenerativeAI(geminiApiKey);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

// const generateContent = async (req : Request, res : Response) => {
//   const { whom, why } = req.body;

//   if (!whom || !why) {
//     return res.status(400).json({ error: 'Missing required fields: whom, why' });
//   }

//   const prompt = `
//     Based on the following information, generate a professional and concise cold email.
//     The output should be a Strictly JSON object no any markdown, no any explaination nothing with two fields: "subject" and "body".

//     Recipient: "${whom}"
//     Reason for contact: "${why}"

//     Example JSON output:
//     {
//       "subject": "Collaboration Opportunity",
//       "body": "Dear ${whom},\n\nI am writing to you today because...\n\nSincerely,\nSiddhant Kore"
//     }
//   `;

//   try {
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     // The model might return the JSON wrapped in markdown, so we need to clean it.
//     const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
//     const generatedContent = JSON.parse(cleanedText);

//     res.json({ preview: generatedContent });

//   } catch (error) {
//     console.error('Error generating content with LLM:', error);
//     res.status(500).json({ error: 'Internal Server Error', details: error.message });
//   }
// };

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const generateColdEmail = async (req, res) => {
//   const { whom, why } = req.body;

//   if (!whom || !why) {
//     return res.status(400).json({ error: 'Missing required fields: whom, why' });
//   }

//   const prompt = `
//     Based on the following information, generate a professional and concise cold email.
//     The output should be a Strictly JSON object with two fields: "subject" and "body".

//     Recipient: "${whom}"
//     Reason for contact: "${why}"

//     Example JSON output:
//     {
//       "subject": "Collaboration Opportunity",
//       "body": "Dear ${whom},\n\nI am writing to you today because..."
//     }
//     use best regards, Sincerely as 'Siddhant Kore' at end if required
//     do not add any markdown, no any explaination nothing
//   `;

//   try {
//     // The OpenAI API uses a different method for chat completions.
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // Use a valid OpenAI model
//       messages: [
//         {
//           role: "system",
//           content: "You are a professional business email writer. Always respond with a valid JSON object.",
//         },
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       response_format: { type: "json_object" },
//     });

//     const generatedText = response.choices[0].message.content;
//     const generatedContent = JSON.parse(generatedText);

//     res.json({ preview: generatedContent });

//   } catch (error) {
//     console.error('Error generating content with LLM:', error);
//     // Log the full error to the console for debugging
//     res.status(500).json({ error: 'Internal Server Error', details: error.message });
//   }
// };

// module.exports = { generateColdEmail, generateContent};