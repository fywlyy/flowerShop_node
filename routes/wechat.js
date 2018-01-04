var wechat = require('wechat');
var verifyInfo = {  //验证信息
  token: 'fywlyy_token',  // your wechat token
  appid: 'wx77243469ec47ce3b'  // your wechat appid
};

//处理文本消息
var handler = wechat(verifyInfo, wechat.text(wechatText));  

module.exports = handler;

function wechatText(message, req, res, next) {
  var input = (message.Content || '').trim();  

  if (/你好/.test(input)) {
    res.reply('Hello world (•̀ロ•́)و✧ ~~');
  } else {
    res.reply('(¬_¬)ﾉ 听不懂啦');
  }
}