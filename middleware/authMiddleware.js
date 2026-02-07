const ensureAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/signin');
};

const forwardAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
        return next();
    }
    res.redirect('/posts');
};

module.exports = { ensureAuthenticated, forwardAuthenticated };
