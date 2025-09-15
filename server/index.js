const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/message.routes.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', messageRoutes);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
