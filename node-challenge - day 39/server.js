require('dotenv').config();
const express = require('express');
const app = express();

// Load values from .env
const PORT = process.env.PORT || 3000;
const DEFAULT_LIMIT = parseInt(process.env.PAGE_LIMIT) || 10;

// Mock data
const data = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

app.get('/items', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || DEFAULT_LIMIT;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < data.length) {
    results.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit
    };
  }

  results.totalItems = data.length;
  results.totalPages = Math.ceil(data.length / limit);
  results.currentPage = page;
  results.data = data.slice(startIndex, endIndex);

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
