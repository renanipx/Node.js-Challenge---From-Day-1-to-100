const UserService = require('../services/UserService');

class UserController {
  constructor() {
    this.service = new UserService();
  }

  create = async (req, res) => {
    try {
      const { name, age, email } = req.body;
      const result = await this.service.createUser(name, age, email);
      res.status(201).json({ message: 'User created', id: result.insertedId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  list = async (req, res) => {
    try {
      const users = await this.service.listUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  update = async (req, res) => {
    try {
      const { name } = req.params;
      const newData = req.body;
      const result = await this.service.updateUser(name, newData);
      res.status(200).json({ message: 'User updated', modifiedCount: result.modifiedCount });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { name } = req.params;
      const result = await this.service.deleteUser(name);
      res.status(200).json({ message: 'User deleted', deletedCount: result.deletedCount });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = UserController;
