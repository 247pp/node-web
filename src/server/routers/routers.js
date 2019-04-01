const express = require('express')
const server = express()

// 首页服务的路由
const homeRouter = require('./home/index')
server.use('/home', homeRouter)
// 获取bin网站的背景图片
const binbgRouter = require('.././api/binbg/binbg')
server.use('/bin', binbgRouter)
server.listen(8084)
