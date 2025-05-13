const Task = require('../../models/Task');
const repository = require('../../infrastructure/TaskRepository');

class CreateTaskHandler {
  handle(command) {
    const task = new Task(command.title);
    repository.add(task);
    return task;
  }
}

module.exports = new CreateTaskHandler();
