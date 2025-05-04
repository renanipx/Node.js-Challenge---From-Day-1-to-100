const CustomStrategy = require('passport-custom').Strategy;
const userService = require('../users/userService');

const customAuthStrategy = new CustomStrategy(async (req, done) => {
    const { username, secretKey } = req.body;

    try {
        const user = await userService.authenticate(username, secretKey);
        if (!user) {
            return done(null, false, { message: 'Invalid credentials' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

module.exports = customAuthStrategy;
