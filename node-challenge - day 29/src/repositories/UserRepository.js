const { connect } = require('../config/database');

class UserRepository {
  constructor() {
    this.collectionName = 'users';
  }

  async create(user) {
    const db = await connect();
    return db.collection(this.collectionName).insertOne(user);
  }

  async findAll() {
    const db = await connect();
    return db.collection(this.collectionName).find().toArray();
  }

  async updateByName(name, newData) {
    const db = await connect();
    return db.collection(this.collectionName).updateOne({ name }, { $set: newData });
  }

  async deleteByName(name) {
    const db = await connect();
    return db.collection(this.collectionName).deleteOne({ name });
  }
}

module.exports = UserRepository;
