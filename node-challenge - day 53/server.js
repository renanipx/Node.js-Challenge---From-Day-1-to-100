const express = require('express');
const logger = require('./logger/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
  logger.info('GET / route hit');
  res.send('Hello, Winston!');
});

// Example error route
app.get('/error', (req, res) => {
  try {
    throw new Error('Something went wrong!');
  } catch (err) {
    logger.error(err); // Logs error with stack trace
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});
