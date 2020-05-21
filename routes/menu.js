var express = require('express');
var Mock = require('mockjs'); 
var router = express.Router();

var menuData = require('../data/menu')

router.get('/', function(req, res, next) {
  res.json(Mock.mock(menuData.menuAdmin));
});

module.exports = router;