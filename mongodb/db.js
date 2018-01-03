'use strict';

var mongoose = require('mongoose');
var chalk = require('chalk');
var configUrl = "mongodb://localhost:27017/gomall"; //数据库地址

mongoose.connect(configUrl, {useMongoClient:true});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.once('open' ,() => {
	console.log(
    chalk.green('连接数据库成功')
  );
})

db.on('error', function(error) {
    console.error(
      chalk.red('Error in MongoDb connection: ' + error)
    );
    mongoose.disconnect();
});

db.on('close', function() {
    console.log(
      chalk.red('数据库断开，重新连接数据库')
    );
    mongoose.connect(configUrl, {server:{auto_reconnect:true}});
});

module.exports = db;