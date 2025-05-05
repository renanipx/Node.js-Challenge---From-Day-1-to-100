require('dotenv').config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: '1h', // Token expiration time
  JWT_BLACKLIST: new Set() // This is an in-memory blacklisting mechanism
};
