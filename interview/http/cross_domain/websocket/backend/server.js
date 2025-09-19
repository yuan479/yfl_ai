const WebSocket = require('ws')
const http = require('http')
//用户要先通过http协议连上服务器
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('WebSocket 服务器运行中...\n')
})

const wss = new WebSocket.Server({
    server,
    path: '/ws',
})
wss.on('connection', (ws) => {
    console.log('Client 已连接')
    ws.on('message', (message) => {
        console.log('Received', message)
        ws.send(`服务器收到消息: ${message}`)
    })
    ws.send('欢迎来到WebSocket服务器')
})

server.listen(8000, () => {
    console.log('http://localhost:8000')
})