const express = require('express');
const router = express.Router();
const { handleWebhook } = require('../controllers/webhookController');

// POST endpoint to receive webhook
router.post('/', handleWebhook);

module.exports = router;
