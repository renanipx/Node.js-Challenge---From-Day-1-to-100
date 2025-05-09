const rateLimit = require('express-rate-limit');

// Basic rate limiting: 10 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    error: 'Too many requests, please try again later.',
  },
});

module.exports = limiter;
