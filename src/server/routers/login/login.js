const express = require('express')
const homeRouter = express.Router()
const mysql = require('../../mysqlConnect')
const bodyParser = require('body-parser')

homeRouter.use(bodyParser.json())
homeRouter.use(bodyParser.urlencoded({
  extended: false
}))

homeRouter.use('/login', (req, res) => {
  let sql = 'select * from loginInfo where login_name = ? and login_password = ?'
  let params = req.body
  mysql.query(sql, [params.username, params.password], (err, result, fields) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message)
      res.send({
        data: null,
        respDesc: err.message,
        respCode: '8888'
      })
      return false
    }
    if (result.length) {
      res.send({
        data: {
          isSuccess: true,
          message: null
        },
        respDesc: '请求成功',
        respCode: '0000'
      })
    } else {
      res.send({
        data: {
          isSuccess: false,
          message: '暂无该用户！'
        },
        respDesc: '请求成功',
        respCode: '0000'
      })
    }
  })
})

module.exports = homeRouter
