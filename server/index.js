const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messageRoutes.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors(corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Adjust this to your client's URL
  optionsSuccessStatus: 200,
}));


const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/api/', messageRoutes);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
