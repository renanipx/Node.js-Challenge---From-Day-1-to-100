class TaskRepository {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  getAll() {
    return this.tasks;
  }
}

module.exports = new TaskRepository();
