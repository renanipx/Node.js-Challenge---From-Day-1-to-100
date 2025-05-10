const express = require('express');
const app = express();

app.get('/orders', (req, res) => {
  res.json([{ id: 1001, userId: 1, productId: 101 }]);
});

app.listen(3003, () => {
  console.log('Order Service running on port 3003');
});
