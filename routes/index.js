// this is my route manager 
const express = require('express');
const Jungle    = require('./Jungle');
const user    = require('./user');

const router  = express.Router();


router.use(Jungle);
router.use(user);

module.exports = router;