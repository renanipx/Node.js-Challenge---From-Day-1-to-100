const bcrypt = require('bcryptjs');

// Normally you'd use a DB. This is just for example
const users = [];

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('password123', salt);

users.push({
  id: '1',
  username: 'john',
  password: hash
});

module.exports = users;
