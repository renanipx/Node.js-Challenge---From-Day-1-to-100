const express = require('express');
const router = express.Router();

const CreateTaskCommand = require('./commands/CreateTaskCommand');
const createTaskHandler = require('./commands/handlers/CreateTaskHandler');

const GetTasksQuery = require('./queries/GetTasksQuery');
const getTasksHandler = require('./queries/handlers/GetTasksHandler');

// Command - Add Task
router.post('/tasks', (req, res) => {
  const command = new CreateTaskCommand(req.body.title);
  const task = createTaskHandler.handle(command);
  res.status(201).json(task);
});

// Query - Get Tasks
router.get('/tasks', (req, res) => {
  const query = new GetTasksQuery();
  const tasks = getTasksHandler.handle(query);
  res.json(tasks);
});

module.exports = router;
