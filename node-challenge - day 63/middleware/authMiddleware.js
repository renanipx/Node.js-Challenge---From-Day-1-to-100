const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_BLACKLIST } = require('../config/config');

// Middleware to check if JWT is blacklisted
function authMiddleware(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Assuming token is in the format "Bearer token"

  if (!token) {
    return res.status(403).json({ message: 'Token required' });
  }

  // Check if token is blacklisted
  if (JWT_BLACKLIST.has(token)) {
    return res.status(403).json({ message: 'Token is blacklisted' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded; // Attach decoded user info to request
    next();
  });
}

module.exports = authMiddleware;
