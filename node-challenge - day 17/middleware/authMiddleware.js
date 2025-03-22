const authService = require('../services/authService');

module.exports.authenticate = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await authService.authenticateUser(username, password);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
