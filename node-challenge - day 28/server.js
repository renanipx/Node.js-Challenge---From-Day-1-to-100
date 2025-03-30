const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(express.json());

const users = [{ id: 1, username: 'admin', password: '123456' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Protected route accessed!', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
