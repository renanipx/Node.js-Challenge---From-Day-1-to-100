const jwt = require('jsonwebtoken');
require('dotenv').config();

const refreshTokens = [];

function generateAccessToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE
  });
}

function generateRefreshToken(user) {
  const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE
  });
  refreshTokens.push(refreshToken); // Store in memory or database
  return refreshToken;
}

function revokeRefreshToken(token) {
  const index = refreshTokens.indexOf(token);
  if (index !== -1) refreshTokens.splice(index, 1);
}

function isRefreshTokenValid(token) {
  return refreshTokens.includes(token);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  revokeRefreshToken,
  isRefreshTokenValid
};
