const express = require('express');
const passport = require('passport');
const router = express.Router();

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Handle Login
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  })
);

// Protected Profile Page
router.get('/profile', ensureAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});

// Middleware to protect routes
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

module.exports = router;
