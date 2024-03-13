var express = require('express');
var router = express.Router();
var spController = require('../controller/khachhang.controller')


router.get('/',  spController.khachhang);
router.post('/',  spController.khachhang);



module.exports = router;