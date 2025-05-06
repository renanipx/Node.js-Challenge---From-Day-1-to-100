const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    keys.accessTokenSecret,
    { expiresIn: keys.accessTokenExpiry }
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    { id: user.id },
    keys.refreshTokenSecret,
    { expiresIn: keys.refreshTokenExpiry }
  );
}

module.exports = { generateAccessToken, generateRefreshToken };
