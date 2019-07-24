const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')
const isAuthenticated = require('../config/middleware/isAuthenticated');


router.get( '/user/login', userController.Login );

router.get( '/user/signup', userController.register );

router.post( '/user/signup', userController.signup );

router.post( '/user/profile', userController.userSignin );

// router.get('/login/facebook', userController.fblogin);

// router.get('/return', userController.fbcallback );

// router.get('/login/facebook', userController.fblogin );

router.get('/forgotpass', userController.forgotpass );

router.get('/home', userController.homepage );

router.get('/toa', userController.toa);

router.get('/singlejob', userController.singlejob);

router.get('/creatingjob', userController.CreatingJob);

router.get('/chat', userController.Chat);

router.get('/profile', isAuthenticated, userController.profile);

module.exports = router;
