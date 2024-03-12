var express = require('express');
var router = express.Router();
var spController = require('../controller/login.controller')


router.get('/',  spController.login);
router.post('/',  spController.login);



module.exports = router;