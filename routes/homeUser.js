var express = require('express');
var router = express.Router();
var spController = require('../controller/homeUser.controller')


router.get('/',  spController.homeUser);
router.post('/',  spController.homeUser);



module.exports = router;