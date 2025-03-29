const express = require('express');
const app = express();
const port = 3000;

// Import routers
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

app.use(express.json()); // Middleware to parse JSON

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
