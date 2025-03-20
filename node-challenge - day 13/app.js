const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', usersRoutes);

module.exports = app;
