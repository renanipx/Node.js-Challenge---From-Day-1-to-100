// app.js
const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes); // Prefix your auth routes

module.exports = app;
