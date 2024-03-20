var express = require('express');
var router = express.Router();
var spController = require('../controller/updateKH.controller')


router.get('/',  spController.updatekhachhang);
router.post('/',  spController.updatekhachhang);



module.exports = router;