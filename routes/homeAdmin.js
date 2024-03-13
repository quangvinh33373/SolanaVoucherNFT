var express = require('express');
var router = express.Router();
var spController = require('../controller/homeAdmin.controller')


router.get('/',  spController.homeAdmin);
router.post('/',  spController.homeAdmin);



module.exports = router;