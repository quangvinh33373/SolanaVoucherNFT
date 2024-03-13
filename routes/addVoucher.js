var express = require('express');
var router = express.Router();
var spController = require('../controller/addVoucher.controller')


router.get('/',  spController.addVoucher);
router.post('/',  spController.addVoucher);



module.exports = router;