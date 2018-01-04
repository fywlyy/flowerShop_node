var express = require('express');
var chalk = require('chalk');
var db = require('../mongodb/db.js');
var utils = require('../common/utils.js');
var wechatApi = require('../common/wechat_api.js');
var config = require('../config/config.json');

var router = express.Router();

//获取,验证access_token,存入mongodb中
router.use(function(req, res, next){
	utils.get(config.wechat.token).then(function(data){
        //获取到值--往下传递  
        if (data) {  
            return Promise.resolve(data);  
        }  
        //没获取到值--从微信服务器端获取,并往下传递  
        else{  
            return wechatApi.updateAccessToken();  
        } 		
	}).then(function(data){
        console.log(data);  
        //没有expire_in值--此data是redis中获取到的  
        if (!data.expires_in) {  
            console.log('数据库获取到值');  
            req.accessToken = data;  
            next();  
        }  
        //有expire_in值--此data是微信端获取到的  
        else{  
            console.log('数据库中无值');  
            /** 
             * 保存到数据库中,由于微信的access_token是7200秒过期
             */  
            utils.set(config.wechat.token,`${data.access_token}`).then(function(result){  
                if (result == 'OK') {  
                    req.accessToken = data.access_token;  
                    next();  
                }  
            })  
        }		
	})
})

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.accessToken);
	res.render('index',{title: 'express+mongodb'});
});

router.post('/weixin',function(req, res, next){
	// let { name, phoneNum } = req.body;
	console.log(req.body);	
})

module.exports = router;
