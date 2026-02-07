const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

const app = express();
const PORT = 5000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Session Configuration
app.use(session({
    secret: 'secret-key', // In production, this should be an environment variable
    resave: false,
    saveUninitialized: false
}));

// Make user available to all views
app.use((req, res, next) => {
    res.locals.user = req.session.username;
    next();
});

// Routes
app.use('/', authRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.redirect('/posts');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
