const repository = require('../../infrastructure/TaskRepository');

class GetTasksHandler {
  handle() {
    return repository.getAll();
  }
}

module.exports = new GetTasksHandler();
