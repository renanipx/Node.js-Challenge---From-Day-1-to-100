const express = require('express');
const cors = require('./middleware/corsConfig');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors);
app.use(express.json());

app.use('/users', userRoutes);

module.exports = app;
