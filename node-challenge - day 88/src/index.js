const { generateToken, verifyToken } = require('./utils/jwtService');

const user = { id: 1, username: 'alice' };

const token = generateToken(user);
console.log('JWT Token:', token);

const decoded = verifyToken(token);
console.log('Decoded Payload:', decoded);
