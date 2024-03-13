var express = require('express');
var router = express.Router();
var spController = require('../controller/profileUser.controller')


router.get('/',  spController.profileUser);
router.post('/',  spController.profileUser);



module.exports = router;