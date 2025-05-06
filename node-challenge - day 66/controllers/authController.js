const bcrypt = require('bcryptjs');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateTokens');

// Mock user database (for demo purposes)
const users = [
  { id: 1, email: 'test@example.com', password: bcrypt.hashSync('password123', 10) }
];

const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // Ideally: Store refresh token securely in a DB or HTTP-only cookie
  res.json({ accessToken, refreshToken });
};

module.exports = { login };
