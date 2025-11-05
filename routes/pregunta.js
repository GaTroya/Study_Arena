var express = require('express');
var router = express.Router();
const preguntaController = require('../controllers').preguntaController;
router.get('/', preguntaController.list);
module.exports = router;