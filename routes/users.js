var express = require('express');
var router = express.Router();
var chalk = require('chalk');
var db = require('../mongodb/db.js');

function getResData(errMsg,result){
	let resData = {
		error: false,
		message: '',
		success: true,
		result: {}
	}
	if(errMsg){
		resData.success = false;
		resData.error = true;
		resData.message = errMsg;
		return resData;
	}

	resData.result = result;
	return resData;	
}

/* GET users listing. */
router.get('/getUserList', function(req, res, next) {
	let collection = db.collection("users");

	collection.find({},{name:1,phone_num:1}).toArray((err,result) => {
		let newResult = [];	
		result.map((item,index) => {
			newResult.id = item._id;
			newResult[index] = {
				id: item._id,
				name: item.name,
				phoneNum: item.phone_num
			}
		})	
		res.json(getResData(err,newResult));
		db.close();
	})
});

/* POST add user. */
router.post('/addUser', function(req, res, next) {
	let collection = db.collection("users");
	let { name, phoneNum } = req.body;
	console.log(name);

	collection.count({name},(err,count) => {
		if(err || count){	
			res.json(getResData(err || '对不起，用户名已存在！请重新输入！',result));
			db.close();	
			return;	
		}
		collection.insertOne({name: name,phone_num: phoneNum},(err,result) => {
			res.json(getResData(err,null));
			db.close();
		})
	})
});

module.exports = router;
