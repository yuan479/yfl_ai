// 启动http server 
// node 最初的commonjs 的模块化方案
//import express from 'express'

const express = require('express'); //引入express框架
// console.log(express)
const app = express() //运行得到后端应用

app.get('/', (req, res) => {
    // get路由,如果你以get的方式请求1314 
    //返回index.html
    //   res.send("hello")//返回一个str 
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')//__dirname :项目的根路径
    //res:response，响应式 有请求req 代表用户，用户通过浏览器（proxy） url (localhost:1314)+ get+ 访问路径path(/)
    // http 为什么足够简单？为了能够高并发，让用户赶快走 数据返回给用户后断开联系，为了服务更多用户
})//路由

//添加一个支持server push 的路由
app.get('/sse', (req, res) => {
    //支持server push 不断的做服务器端推送  少量的不是常态
    res.set({
        //stream 监听事件拿到的 文本流 
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',//禁止前端使用缓存
        'Connection': 'keep-alive',//保持连接
    })//设置响应头
    res.flushHeaders()// 刷新响应头
    setInterval(() => {
        const message = `Current Time is ${new Date().toLocaleTimeString()}`
        //server push 持续输出，不会断开
        res.write(`data:${message}\n\n`)
    }, 1000)
})


const http = require('http').Server(app) // 应用通过引用http模块 server的基本能力 B/S 架构
//http模块 node内置模块
//怎么理解监听？ 伺服状态：它在那里等着，等待伺候用户，
http.listen(1314, () => {
    console.log('server is running on 1314')
})
