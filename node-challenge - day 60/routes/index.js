const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Simple route for the homepage
router.get('/', homeController.home);

module.exports = router;
