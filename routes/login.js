var express = require('express');
var router = express.Router();
var spController = require('../controller/login.controller')


router.get('/',  spController.login);
router.post('/login',  spController.login);
router.post('/loginAPI',  spController.LOGIN);


module.exports = router;