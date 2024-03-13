var express = require('express');
var router = express.Router();
var spController = require('../controller/updateVoucher.controller')


router.get('/',  spController.UpdateVoucher);
router.post('/',  spController.UpdateVoucher);



module.exports = router;