const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const cluster = require('cluster');
const os = require('os');

// Number of CPU cores
const numCPUs = os.cpus().length;

const app = express();

// Middleware for logging requests in production
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));  // Logs request details
}

// Middleware for security headers
app.use(helmet());

// GZIP compression middleware for better performance
app.use(compression());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server with clustering for better performance
if (cluster.isMaster) {
  // Fork workers based on number of CPUs
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
