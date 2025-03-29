const express = require('express');
const router = express.Router();

// Sample products data
const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' }
];

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Get a single product by ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

// Create a new product
router.post('/', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

module.exports = router;
