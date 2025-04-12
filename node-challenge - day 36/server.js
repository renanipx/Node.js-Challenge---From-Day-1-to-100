require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Read values from .env
const windowMinutes = parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES) || 1;
const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5;

// Rate limiting middleware using .env values
const apiLimiter = rateLimit({
  windowMs: windowMinutes * 60 * 1000, // in milliseconds
  max: maxRequests,
  message: {
    status: 429,
    message: 'Too many requests. Please try again later.'
  },
});

app.use('/api', apiLimiter);

app.get('/', (req, res) => {
  res.send('Welcome to the homepage! Go to /api to see rate limiting in action.');
});

app.get('/api', (req, res) => {
  res.json({ message: 'You have accessed a rate-limited API route!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
