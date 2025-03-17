// index.js

const express = require('express');
const app = express();

// Importing the search routes
const searchRoutes = require('./routes/searchRoutes');

// Use the search routes
app.use(searchRoutes);

// Start the server on the configured port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
