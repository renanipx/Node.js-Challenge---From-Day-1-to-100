const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ users: ['Alice', 'Bob'] });
});

router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  res.status(201).json({ message: `User ${name} created` });
});

module.exports = router;
