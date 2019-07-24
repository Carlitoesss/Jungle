const passport = require('../config/passport');
const isAuthenticated = require('../config/middleware/isAuthenticated');

// GET user/signup
exports.signups = (req, res) => {
    res.render('signup');
}

// GET /user/login
exports.userLogin = (req, res) => {
    res.render('login');
}

// GET /profile
exports.profile = (req, res) => {
    res.render('profile', {currentUser: req.user});
}

// GET for /logout
exports.userLogout = (req, res) => {
    req.logout();
    res.redirect('/user/login');
}

// POST /user/signup
exports.signup = passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/user/signup' 
});

// POST user/login
exports.userSignin = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

exports.forgotpass = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

exports.homepage = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

exports.toa = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

exports.singlejob = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

exports.creatingjob = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

exports.chat = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

// // Get login/facebook
// exports.fblogin = passport.authenticate('facebook');

// // Get /return
// exports.fbcallback = passport.authenticate('facebook', { failureRedirect: '/user/login',
// successRedirect: '/profile',} )

