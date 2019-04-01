const express = require('express')
const homeRouter = express.Router()
const mysql = require('../../mysqlConnect')
homeRouter.use('/login', (req, res) => {
  mysql.query('SELECT * FROM loginInfo', (err, result, fields) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message)
      return
    }
    console.log(result[0].uid)
  })
  res.send('路由分开写')
})

module.exports = homeRouter
