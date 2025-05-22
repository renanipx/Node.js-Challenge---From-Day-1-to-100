const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Admin dashboard
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('admin/dashboard', { posts });
});

// Create post
router.post('/new', async (req, res) => {
    await Post.create({ title: req.body.title, body: req.body.body });
    res.redirect('/admin');
});

// Edit form
router.get('/edit/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('admin/edit', { post });
});

// Update post
router.put('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin');
});

// Delete post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
});

module.exports = router;
