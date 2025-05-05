const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION, JWT_BLACKLIST } = require('./config/config');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route to login and issue a token
app.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  // Generate JWT
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

  res.json({ token });
});

// Route to logout and blacklist the token
app.post('/logout', authMiddleware, (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  // Add the token to the blacklist
  JWT_BLACKLIST.add(token);

  res.json({ message: 'Logged out successfully' });
});

// Protected route example
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
