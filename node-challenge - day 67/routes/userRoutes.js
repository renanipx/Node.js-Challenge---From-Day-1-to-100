const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateRequest = require('../middleware/validateRequest');
const { registerSchema } = require('../validators/userSchemas');

router.post('/register', validateRequest(registerSchema), userController.register);

module.exports = router;
