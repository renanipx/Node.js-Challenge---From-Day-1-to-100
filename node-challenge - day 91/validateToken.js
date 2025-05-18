const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const EXPECTED_ISSUER = process.env.EXPECTED_ISSUER;
const EXPECTED_AUDIENCE = process.env.EXPECTED_AUDIENCE;

module.exports = function (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Missing token' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });

        // Validate issuer and audience
        if (decoded.iss !== EXPECTED_ISSUER || decoded.aud !== EXPECTED_AUDIENCE) {
            return res.status(403).json({ error: 'Invalid token claims' });
        }

        req.user = decoded;
        next();
    });
};
