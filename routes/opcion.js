var express = require('express');
var router = express.Router();
const opcionController = require('../controllers').opcionController;
router.get('/', opcionController.list);
module.exports = router;