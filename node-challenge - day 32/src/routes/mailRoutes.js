const express = require('express');
const router = express.Router();
const { sendTestEmail } = require('../services/mailService');

router.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await sendTestEmail(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
