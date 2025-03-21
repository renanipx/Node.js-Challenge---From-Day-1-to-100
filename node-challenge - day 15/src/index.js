const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
