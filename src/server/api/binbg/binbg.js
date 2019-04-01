const express = require('express')
const request = require('request')
const binbgRouter = express.Router()

binbgRouter.use('/bg', (req, res) => {
  request({
    url: 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1554108284232&pid=hp&FORM=BEHPTB'
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body)
      res.send({ data: JSON.parse(body), respCode: '0000', respDecs: '请求成功' })
    } else {
      res.send({ data: JSON.parse(body), respCode: '8888', respDecs: '调取bin网站失败' })
    }
  })
})
module.exports = binbgRouter
