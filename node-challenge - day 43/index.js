const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const authMiddleware = require('./middleware/auth');

// Dummy user data 
const users = [{ id: 1, username: 'admin', password: 'password' }];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.cookie(process.env.COOKIE_NAME, token, {
    httpOnly: true,
    secure: true, // set to true in production with HTTPS
    sameSite: 'Strict',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.json({ message: 'Logged in successfully' });
});

// Protected route
app.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the dashboard!', user: req.user });
});

// Logout route
app.post('/logout', (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME);
  res.json({ message: 'Logged out successfully' });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
