const express = require('express');
const router = express.Router();
var loginController = require('../controller/loginController');

router.post('/login', loginController.loginCtrl);

module.exports = router;
//code added on 25/12/23