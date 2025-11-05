var express = require('express');
var router = express.Router();
const sesiontriviaController = require('../controllers').sesiontriviaController;
router.get('/', sesiontriviaController.list);
module.exports = router;