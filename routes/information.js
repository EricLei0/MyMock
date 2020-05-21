var express = require('express');
var Mock = require('mockjs'); 
var router = express.Router();

var contactsData = require('../data/contacts')

router.post('/contacts', function(req, res, next) {
  res.json(Mock.mock(contactsData.someRecords));
});

module.exports = router;