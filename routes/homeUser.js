var express = require('express');
var router = express.Router();
var spController = require('../controller/home.controller')


router.get('/',  spController.home);
router.post('/',  spController.home);



module.exports = router;