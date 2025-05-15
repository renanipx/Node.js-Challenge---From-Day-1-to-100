const express = require('express');
const app = express();
app.use(express.json());

const todos = [];

app.get('/todos', (req, res) => {
  // Simulate some CPU work
  for (let i = 0; i < 1e6; i++) {}
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });
  todos.push({ id: todos.length + 1, task });
  res.status(201).json({ message: 'Task added' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
