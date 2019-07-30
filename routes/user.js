const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')
const isAuthenticated = require('../config/middleware/isAuthenticated');


router.get( '/login', userController.userLogin );

router.post( '/login', userController.logins);

router.get('/logout', userController.userLogout);

router.get( '/signup', userController.signups );

router.post( '/signup', userController.signup );

router.get('/forgotpass', userController.forgotpass );

router.get('/home', userController.homepage );

router.get('/toa', userController.toa);

router.get('/singlejob/:jobid', userController.singlejob);

router.get('/createjob',isAuthenticated, userController.createjob);

router.get('/chat', userController.chat);

router.get('/profile', isAuthenticated, userController.profile);

module.exports = router;
