var express = require('express');
var chalk = require('chalk');
var db = require('../mongodb/db.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index',{title: 'express+mongodb'});
});

module.exports = router;