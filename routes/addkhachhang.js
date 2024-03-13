var express = require('express');
var router = express.Router();
var spController = require('../controller/addkhachhang.controller')


router.get('/',  spController.addkhachhang);
router.post('/',  spController.addkhachhang);



module.exports = router;