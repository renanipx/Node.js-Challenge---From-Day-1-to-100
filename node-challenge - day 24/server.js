require('dotenv').config(); // Load environment variables
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Import and start the cron job
require('./cronJob'); 

// Main route
app.get('/', (req, res) => {
    res.send('Server is running and cron job is active!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
