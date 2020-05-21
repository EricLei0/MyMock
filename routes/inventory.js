var express = require('express');
var Mock = require('mockjs'); 
var router = express.Router();

var inventoryData = require('../data/inventory')

router.post('/search', function(req, res, next) {
  res.json(Mock.mock(inventoryData.someRecords));
});

module.exports = router;