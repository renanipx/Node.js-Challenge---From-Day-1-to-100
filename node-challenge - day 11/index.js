// Day 11: Static Files with Express
// Serve static files using Express middleware

// Load environment variables from the .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

// Use the PORT variable from the .env file or default to 3000
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Project</title>
      <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
      <header>
        <h1>Welcome to my project!</h1>
      </header>

      <main>
        <img src="/images/logo.png" alt="Logo">
        <p>This is an example of how to serve static files with Express!</p>
      </main>

      <script src="/js/app.js"></script>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
