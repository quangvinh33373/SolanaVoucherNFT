var express = require('express');
var router = express.Router();
var spController = require('../controller/qlyVcher.controller')


router.get('/',  spController.qlyVoucher);
router.post('/addVoucher',  spController.put);
router.post('/updateVoucher/:id',  spController.update);
router.post('/deleteVoucher/:id',spController.delete)
router.get('/APIVoucher',  spController.qlyVoucherMobile);
router.post('/vouchers/:id/mua', spController.buyVoucher);
router.post('/vouchers/:id/ban', spController.sellVoucher);


module.exports = router;