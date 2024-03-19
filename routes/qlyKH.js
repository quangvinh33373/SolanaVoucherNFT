var express = require('express');
var router = express.Router();
var spController = require('../controller/qlyKH.controller')


router.get('/',  spController.qlyKH);
router.post('/',  spController.qlyKH);



module.exports = router;