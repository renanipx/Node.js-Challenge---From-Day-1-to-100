const express = require('express');
const errorHandler = require('./middlewares/errorMiddleware');
const CustomError = require('./utils/CustomError');

const app = express();

app.use(express.json()); // Enable JSON body parsing

// Test route
app.get('/', (req, res) => {
  res.send('API is working fine!');
});

// Route that throws a generic error
app.get('/error', (req, res, next) => {
  const error = new Error('This is a generic error');
  error.statusCode = 400;
  next(error);
});

// Route that throws a custom error
app.get('/custom-error', (req, res, next) => {
  next(new CustomError('This is a custom error', 403));
});

// Error handling middleware (should always be last)
app.use(errorHandler);

module.exports = app;
