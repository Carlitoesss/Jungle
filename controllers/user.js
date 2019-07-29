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
    res.redirect('/login');
}

exports.logins = passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/signup' 
})

// POST /user/signup
exports.signup = passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup' 
});

// POST user/login
exports.userSignin = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

exports.forgotpass = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

exports.homepage = (req, res) => {
    res.render('homepage', {currentUser: req.user});
}

exports.toa = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

exports.singlejob = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

exports.creatingjob = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

exports.chat = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

// // Get login/facebook
// exports.fblogin = passport.authenticate('facebook');

// // Get /return
// exports.fbcallback = passport.authenticate('facebook', { failureRedirect: '/user/login',
// successRedirect: '/profile',} )

