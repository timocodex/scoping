var express = require('express');
var router = express.Router();
var scope = require('../controllers/scopes.controller.js')
/* GET home page. */
router.get('/meals',scope.setMeal);

module.exports = router;
