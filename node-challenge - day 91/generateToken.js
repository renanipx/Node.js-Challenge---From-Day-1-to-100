const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = jwt.sign(
  {
    sub: '1234567890',
    name: 'Jane Doe',
    aud: process.env.EXPECTED_AUDIENCE,
    iss: process.env.EXPECTED_ISSUER,
  },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

console.log('Your test JWT:\n', token);
