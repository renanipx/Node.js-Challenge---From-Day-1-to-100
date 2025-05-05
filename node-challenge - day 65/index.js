const express = require('express');
const usersRoute = require('./routes/users');

const app = express();

app.use('/api/users', usersRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔧 Mock API server running at http://localhost:${PORT}/api/users`);
});
