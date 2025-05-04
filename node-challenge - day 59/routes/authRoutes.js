const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login',
    passport.authenticate('custom-auth', { session: false }),
    (req, res) => {
        res.json({ message: 'Login successful', user: req.user });
    }
);

module.exports = router;
