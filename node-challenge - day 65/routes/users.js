const express = require('express');
const router = express.Router();
const generateUsers = require('../mock/userData');

router.get('/', (req, res) => {
  const count = parseInt(req.query.count) || 5;
  const users = generateUsers(count);
  res.json(users);
});

module.exports = router;
