const express = require('express');
const router = express.Router();

// Sample users data
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get a single user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// Create a new user
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
