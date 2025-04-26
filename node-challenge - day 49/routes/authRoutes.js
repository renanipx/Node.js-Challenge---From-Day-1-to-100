const express = require('express');
const router = express.Router();
const { login, refresh, logout } = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/login', login);
router.post('/token', refresh);
router.post('/logout', logout);

// Protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.username}` });
});

module.exports = router;
