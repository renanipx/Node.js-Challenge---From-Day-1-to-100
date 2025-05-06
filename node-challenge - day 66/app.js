const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

app.use(express.json());

app.use('/auth', authRoutes);

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
