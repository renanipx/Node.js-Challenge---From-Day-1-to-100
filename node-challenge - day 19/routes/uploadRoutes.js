const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

// Define the POST route for file upload
router.post('/', uploadController.handleFileUpload);

module.exports = router;
