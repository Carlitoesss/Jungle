const passport = require('../config/passport');
const isAuthenticated = require('../config/middleware/isAuthenticated');
const db = require('../models');

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
    successRedirect: '/home',
    failureRedirect: '/login' 
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
    db.Jobs.findAll({
        attributes: [ 'userId' ,'title', 'description', 'avatar' ]
    }).then(function(results){
        res.render('homepage', {currentUser: req.user, Jobs: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
    
}

exports.toa = (req, res) => {
    res.render('toa', {currentUser: req.user});
}

exports.singlejob = (req, res) => {
    db.Jobs.findOne({
        where: {id: req.params.jobid } 
    }).then(function(result){
        res.render('singlejob', {job: result})
    })
}

exports.createjob = (req, res) => {
    res.render('createjob', {currentUser: req.user});
}



exports.chat = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

// // Get login/facebook
// exports.fblogin = passport.authenticate('facebook');

// // Get /return
// exports.fbcallback = passport.authenticate('facebook', { failureRedirect: '/user/login',
// successRedirect: '/profile',} )

