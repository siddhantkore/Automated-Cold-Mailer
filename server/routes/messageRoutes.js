const express = require('express');
const router = express.Router();
const sendMessage = require('../controllers/messageController.js');
const {generateContent, generateColdEmail} = require('../controllers/llmCall.js');

router.post('/generate-content', generateColdEmail);
router.post('/send-message', sendMessage);

module.exports = router;
