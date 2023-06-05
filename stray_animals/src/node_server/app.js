const express = require('express');
const history = require('connect-history-api-fallback');
// 创建app
const app = express();
// 注册路由模块
const router = require('./router')
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')

app.use(history())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  // 处理 mutipart/form-data
app.use(multiparty())
// 注意顺序
app.use(router)
// 启动并监听服务器
app.listen(5000,()=>{
    console.log("port:5000 is running");
})
