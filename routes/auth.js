var express = require('express');
var Mock = require('mockjs'); 
var router = express.Router();

var userData = require('../data/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  res.json(Mock.mock(userData.admin));
});

module.exports = router;