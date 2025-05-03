const Redis = require('ioredis');
require('dotenv').config();

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const WINDOW_SIZE = parseInt(process.env.RATE_LIMIT_WINDOW, 10);
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX, 10);

const rateLimiter = async (req, res, next) => {
  const ip = req.ip;
  const key = `rate-limit:${ip}`;

  try {
    const requestCount = await redis.incr(key);

    if (requestCount === 1) {
      await redis.expire(key, WINDOW_SIZE);
    }

    if (requestCount > MAX_REQUESTS) {
      return res.status(429).json({
        message: 'Too many requests, please try again later.',
      });
    }

    next();
  } catch (err) {
    console.error('Redis error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = rateLimiter;