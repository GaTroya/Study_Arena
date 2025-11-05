var express = require('express');
var router = express.Router();
const triviaController = require('../controllers').triviaController;
router.get('/', triviaController.list);
module.exports = router;