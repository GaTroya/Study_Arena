var express = require('express');
var router = express.Router();
const transaccionController = require('../controllers').transaccionController;
router.get('/', transaccionController.list);
module.exports = router;