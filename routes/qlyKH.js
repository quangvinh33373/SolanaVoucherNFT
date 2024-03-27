var express = require('express');
var router = express.Router();
var spController = require('../controller/qlyKH.controller')


router.get('/',  spController.qlyKH);
router.post('/addKH',  spController.put);
router.post('/updateKH/:id',  spController.update);
router.post('/deleteKH/:id',spController.delete);
router.get('/APIKH',  spController.qlykhMobile);
router.post('/updateCustomerAPI/:id',  spController.updateCustomerAPI);


module.exports = router;