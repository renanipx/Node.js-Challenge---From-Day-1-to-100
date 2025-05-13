const { v4: uuidv4 } = require('uuid');

class Task {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
    this.createdAt = new Date();
  }
}

module.exports = Task;
