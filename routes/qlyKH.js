var express = require('express');
var router = express.Router();
var spController = require('../controller/qlyKH.controller')


router.get('/',  spController.qlyKH);
router.post('/addKH',  spController.put);
router.get('/updateKH/:id',  spController.update);
router.delete('/deleteKh/:id',spController.delete)


module.exports = router;