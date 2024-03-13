var express = require('express');
var router = express.Router();
var spController = require('../controller/register.controller')


    // res.render('register');

router.get('/',  spController.register_i);
router.post('/',  spController.register_i);

module.exports = router;