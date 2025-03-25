const express = require('express');
const { findUserById } = require('./database');

const app = express();
const PORT = 3000;

app.get('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await findUserById(id);
    res.json({ success: true, user });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
