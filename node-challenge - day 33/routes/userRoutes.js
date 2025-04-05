import express from 'express';
import { validateUser } from '../validators/userValidator.js';
import handleValidation from '../middleware/handleValidation.js';

const router = express.Router();

router.post('/register', validateUser, handleValidation, (req, res) => {
  res.json({ message: 'User registered successfully!' });
});

export default router;
