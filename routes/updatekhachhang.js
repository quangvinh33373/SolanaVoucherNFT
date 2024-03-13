var express = require('express');
var router = express.Router();
var spController = require('../controller/updatekhachhang.controller')


router.get('/',  spController.updatekhachhang);
router.post('/',  spController.updatekhachhang);



module.exports = router;