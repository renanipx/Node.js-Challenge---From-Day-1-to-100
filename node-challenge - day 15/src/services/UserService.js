const User = require('../domain/User');
const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async createUser(name, age, email) {
    const user = new User(name, age, email);
    return this.repository.create(user);
  }

  async listUsers() {
    return this.repository.findAll();
  }

  async updateUser(name, newData) {
    return this.repository.updateByName(name, newData);
  }

  async deleteUser(name) {
    return this.repository.deleteByName(name);
  }
}

module.exports = UserService;
