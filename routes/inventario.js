var express = require('express');
var router = express.Router();
const inventarioController = require('../controllers').inventarioController;
router.get('/', inventarioController.list);
module.exports = router;