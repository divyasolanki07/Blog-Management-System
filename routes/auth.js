const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { forwardAuthenticated } = require('../middleware/authMiddleware');

// Signup - Show Form
router.get('/signup', forwardAuthenticated, (req, res) => {
    res.render('auth/signup');
});

// Signup - Handle Submission
router.post('/signup', forwardAuthenticated, async (req, res) => {
    const { username, password } = req.body;
    try {
        await User.create(username, password);
        res.redirect('/signin');
    } catch (err) {
        console.error(err);
        res.render('auth/signup', { error: 'Username already exists or error creating user' });
    }
});

// Signin - Show Form
router.get('/signin', forwardAuthenticated, (req, res) => {
    res.render('auth/signin');
});

// Signin - Handle Submission
router.post('/signin', forwardAuthenticated, async (req, res) => {
    const { username, password } = req.body;
    const user = User.findByUsername(username);

    if (!user) {
        return res.render('auth/signin', { error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.render('auth/signin', { error: 'Invalid username or password' });
    }

    // Login successful
    req.session.userId = user.id;
    req.session.username = user.username;
    res.redirect('/posts');
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) console.error(err);
        res.redirect('/signin');
    });
});

module.exports = router;
