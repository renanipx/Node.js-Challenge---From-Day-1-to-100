const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// POST create user
router.post('/', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ message: 'Name and email required' });

    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name, email } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;

    res.json(user);
});

// DELETE user
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: 'User deleted' });
});

module.exports = router;
