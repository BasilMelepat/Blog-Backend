var express = require('express');
const doLogin = require('../controller/admindoLogin');
const AdmindoSignup = require('../controller/adminSignup');
var router = express.Router();

/* GET home page. */
router.post('/adminLogin',doLogin);
router.post('/adminSignup',AdmindoSignup);

module.exports = router;
