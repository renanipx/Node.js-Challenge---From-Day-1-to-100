const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const uploadRoutes = require('./routes/uploadRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to handle file uploads
app.use(express.static(path.join(__dirname, 'uploads')));

// Use upload routes
app.use('/api/upload', uploadRoutes);

module.exports = app;
