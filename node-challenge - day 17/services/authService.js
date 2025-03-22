const User = require('../models/userModel');
const bcryptUtils = require('../utils/bcryptUtils');

module.exports.authenticateUser = async (username, password) => {
  const user = User.getByUsername(username);
  
  if (!user) {
    throw new Error('Invalid username or password');
  }
  
  const isMatch = await bcryptUtils.comparePassword(password, user.passwordHash);
  
  if (!isMatch) {
    throw new Error('Invalid username or password');
  }

  return { message: 'Login successful' };
};
