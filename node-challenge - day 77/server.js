const express = require('express');
const users = require('./users/users');
const {
  generateAccessToken,
  generateRefreshToken,
  revokeRefreshToken,
  isRefreshTokenValid
} = require('./auth/tokens');
const authenticateToken = require('./auth/middleware');

const app = express();
app.use(express.json());

// LOGIN
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.json({ accessToken, refreshToken });
});

// REFRESH TOKEN
app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken || !isRefreshTokenValid(refreshToken)) {
    return res.sendStatus(403);
  }

  try {
    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const newAccessToken = generateAccessToken(user);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.sendStatus(403);
  }
});

// LOGOUT
app.post('/logout', (req, res) => {
  const { refreshToken } = req.body;
  revokeRefreshToken(refreshToken);
  res.sendStatus(204);
});

// PROTECTED ROUTE
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

app.listen(3000, () => console.log('Server running on port 3000'));
