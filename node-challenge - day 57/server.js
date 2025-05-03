// server.js
const express = require('express');
const dotenv = require('dotenv');
const rateLimiter = require('./middleware/rateLimiter');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(rateLimiter);

app.get('/', (req, res) => {
  res.send('Hello! You are within the rate limit.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
