/**
 * 服务器部署，使用
 * node server.js 
 * 或者 pm2
 * pm2 start server.js
 * 然后使用ngxin将443或者80端口的请求代理到8080
 */
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.send("你好 world2")
});

app.listen(9999, function() {
  console.log('server strart on 8080')
});
