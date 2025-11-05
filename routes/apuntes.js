var express = require('express');
var router = express.Router();
const apuntesController = require('../controllers').apuntesController;
router.get('/', apuntesController.list);
module.exports = router;