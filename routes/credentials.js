var express = require('express');
const doSignup = require('../controller/signup');
const doSignin = require('../controller/signin');
var router = express.Router();


router.post('/signup',doSignup);
router.post('/signin',doSignin);

module.exports = router;


