const express = require('express')
const homeRouter = express.Router()
const mysql = require('../../mysqlConnect')
const bodyParser = require('body-parser')

homeRouter.use(bodyParser.json())
homeRouter.use(bodyParser.urlencoded({
  extended: false
}))

homeRouter.use('/tree', (req, res) => {
  let sql = 'select * from test_tree_children'
  console.log(req.body, sql)
  mysql.query(sql, (err, result) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message)
      res.send({
        data: null,
        respDesc: err.message,
        respCode: '8888'
      })
      return false
    }
    res.send({
      data: result,
      respDesc: '测试成功',
      respCode: '0000'
    })
  })
})

module.exports = homeRouter
