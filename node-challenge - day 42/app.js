const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config(); 

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 500;
  next(error);
});

// Use error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
