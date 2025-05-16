const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config/secrets');

/**
 * Generate JWT token for given payload
 */
function generateToken(payload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
}

/**
 * Verify and decode a JWT token
 */
function verifyToken(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = {
  generateToken,
  verifyToken,
};
