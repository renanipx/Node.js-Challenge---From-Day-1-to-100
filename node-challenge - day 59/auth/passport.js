const passport = require('passport');
const customAuthStrategy = require('./customStrategy');

passport.use('custom-auth', customAuthStrategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Normally, you'd fetch from DB
    done(null, { id });
});

module.exports = passport;
