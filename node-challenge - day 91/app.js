const express = require('express');
const dotenv = require('dotenv');
const validateToken = require('./validateToken');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Sample protected route
app.get('/protected', validateToken, (req, res) => {
    res.json({ message: 'Access granted!', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
