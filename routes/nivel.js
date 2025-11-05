var express = require('express');
var router = express.Router();
const nivelController = require('../controllers').nivelController;
router.get('/', nivelController.list);
module.exports = router;