const express = require('express');
const router = express.Router();
const { generateContent, sendMessage } = require('../controllers/message.controller.js');

router.post('/generate-content', generateContent);
router.post('/send-message', sendMessage);

module.exports = router;
