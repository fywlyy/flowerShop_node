var express = require('express');  
var router = express.Router();  
var wechat = require('wechat');
var config = require('../config/config.json');  
  
var newConfig = {  
  token : config.token,  
  appid : config.appID,  
  appsecret : config.appSecret,  
  encodingAESKey : ''  
};  
  
router.use(express.query());  
  
router.use('/', wechat(newConfig, function(req, res, next) {  
    console.log(req.weixin);  
    var message = req.weixin;  
    //文本  
    if (message.Content === '1') {  
  
        res.reply('hehe');  
    }  
  
}));  
  
module.exports = router;  