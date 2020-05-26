//! 展示界面的服务器
const express = require('express')
const app = express()
const PORT = 8888
const HOST_NAME = '10.31.160.49'
const path = require('path')

app.use(express.static(path.join(__dirname,'./client')))

app.listen(PORT,HOST_NAME,() => {
  console.log(`地址: http://${ HOST_NAME }:${ PORT }`)
})