const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

const app = express();

mongoose.connect('mongodb://localhost/simplecms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
// EJS + Layouts
app.use(expressLayouts); 
app.set('layout', 'layout'); 

// Routes
app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));

// Start server
app.listen(3000, () => {
    console.log('SimpleCMS running on http://localhost:3000');
});
