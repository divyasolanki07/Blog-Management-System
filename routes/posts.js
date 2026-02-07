const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');
const { ensureAuthenticated } = require('../middleware/authMiddleware');

// Protect all routes in this router
router.use(ensureAuthenticated);

// Index Route
router.get('/', (req, res) => {
    const posts = Post.findAll();
    res.render('posts/index', { posts });
});

// New Route
router.get('/new', (req, res) => {
    res.render('posts/new');
});

// Create Route
router.post('/', (req, res) => {
    const newPost = Post.create(req.body);
    res.redirect(`/posts/${newPost.id}`);
});

// Show Route
router.get('/:id', (req, res) => {
    const post = Post.findById(req.params.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render('posts/show', { post });
});

// Edit Route
router.get('/:id/edit', (req, res) => {
    const post = Post.findById(req.params.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render('posts/edit', { post });
});

// Update Route
router.put('/:id', (req, res) => {
    const updatedPost = Post.update(req.params.id, req.body);
    if (!updatedPost) {
        return res.status(404).send('Post not found');
    }
    res.redirect(`/posts/${req.params.id}`);
});

// Delete Route
router.delete('/:id', (req, res) => {
    Post.delete(req.params.id);
    res.redirect('/posts');
});

module.exports = router;
