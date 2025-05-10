const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
  const response = await axios.get('http://localhost:3001/users');
  res.json(response.data);
});

app.get('/products', async (req, res) => {
  const response = await axios.get('http://localhost:3002/products');
  res.json(response.data);
});

app.get('/orders', async (req, res) => {
  const response = await axios.get('http://localhost:3003/orders');
  res.json(response.data);
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
