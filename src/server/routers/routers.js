const express = require('express')
const server = express()

// 首页服务的路由
const homeRouter = require('./home/index')
server.use('/home', homeRouter)
server.listen(8084)
