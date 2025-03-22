// This module defines the structure of the user model.
// In real applications, this would interact with a database.
module.exports = class User {
    constructor(username, passwordHash) {
      this.username = username;
      this.passwordHash = passwordHash;
    }
  
    static getByUsername(username) {
      if (username === 'testuser') {
        return new User('testuser', '$2b$10$.5CimglffE4jD/8yVI.GbeUeyrwGFW9hcqSl.ZnAKiIfi.B5thvJK'); // password '123'
      }
      return null;
    }
  };
  