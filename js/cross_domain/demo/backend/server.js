//commonjs
const http = require('http')
// js 异步编程 异步无阻塞
// node 天生性能好 相同的用户访问数，使用的服务器更少，更便宜
const server = http.createServer((req, res) => {
    if (req.url === '/api/hello' && req.method === 'GET') {
        console.log('呀吼')
        res.writeHead(200, {
            'Content-Type': 'text/javascript; charset=utf-8'
        })
        // JSON 
        const data = {
            node: 0,
            msg: '！！！后端降临！！！'
        }
        res.end("callback(" + JSON.stringify(data) + ")")
        /*  res.end('console.log("欢迎来到后端的世界！！！")') */
        /*  res.end(JSON.stringify({message:'欢迎来到后端！！！'})) */
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8'
        })
        res.end('哎呀，网络崩溃了(っ °Д °;)っ')
    }
})
//服务器程序在 8080端口上运行
server.listen(8080, () => {
    console.log('后端服务器启动了，端口是8080')
})