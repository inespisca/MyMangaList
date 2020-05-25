const passport = require('passport');
const User = require('../models/User');

const showSignup = (req, res, next) => {
    res.render('signup');
}

const showLogin = (req, res, next) => {
    res.render('login');
}

const createUser = (req, res, next) => {
    User.create(req.body, (err, results, fields) => {
        if (err) return res.render('error', { err })
 
        res.redirect('/auth/login');
    })
}

const authenticateUser = passport.authenticate(
    'local',
    {
        successRedirect: '/dashboard',
        failureRedirect: '/auth/login'
    }
)

const authorize = (req, res, next) => {
    if(!req.user) return res.redirect('./auth/login');

    next();
}

const logout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
 
module.exports = {
    showSignup,
    showLogin,
    createUser,
    authenticateUser,
    logout,
    authorize,
};