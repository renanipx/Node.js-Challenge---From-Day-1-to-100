const path = require('path');

// Simulated user (replace with database later)
const user = {
  username: 'admin',
  password: '123456'
};

exports.home = (req, res) => {
  res.send('<h2>Home</h2><a href="/login">Login</a> | <a href="/dashboard">Dashboard</a>');
};

exports.showLogin = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    req.session.user = username;
    return res.redirect('/dashboard');
  }

  res.send('Invalid username or password. <a href="/login">Try again</a>');
};

exports.dashboard = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/dashboard.html'));
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) return res.send('Error logging out.');
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
};
