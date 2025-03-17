// routes/searchRoutes.js

const express = require('express');
const router = express.Router();

// Import the controller where the validation logic and response are handled
const { searchResults } = require('../controllers/searchController');

// Define the route and use the controller's function to handle the logic
router.get('/search', searchResults);

module.exports = router;
