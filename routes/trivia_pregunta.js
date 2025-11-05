var express = require('express');
var router = express.Router();
const trivia_preguntaController = require('../controllers').trivia_preguntaController;
router.get('/', trivia_preguntaController.list);
module.exports = router;