var express = require('express');
var router = express.Router();
var spController = require('../controller/qlyVcherAdmin.controller')


router.get('/',  spController.qlyVoucher);
router.post('/',  spController.qlyVoucher);



module.exports = router;