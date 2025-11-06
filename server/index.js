const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messageRoutes.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// CORS: allow local development from any origin/hostname and handle preflight
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
}));


const port = process.env.PORT || 3000;
// app.use(bodyParser.json());
app.use(express.json());

app.use('/api/', messageRoutes);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
