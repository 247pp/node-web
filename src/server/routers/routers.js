const express = require('express')
const server = express()

// 首页服务的路由
const homeRouter = require('./login/login')
server.use('/home', homeRouter)
// 获取bin网站的背景图片
const binbgRouter = require('.././api/binbg/binbg')
// server.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.header('X-Powered-By', ' 3.2.1')
//   // 这段仅仅为了方便返回json而已
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   if (req.method === 'OPTIONS') {
//     // 让options请求快速返回
//     res.sendStatus(200)
//   } else {
//     next()
//   }
// })
server.use('/bin', binbgRouter)
server.listen(8084)
