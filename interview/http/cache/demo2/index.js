//协商缓存，在返回文件的同时，返回一个响应头，Last-Modified 和 ETag
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto'); // 加密 hash计算

//单向加密，生成 hash值，比较，相同则说明地址没变
function md5(data) {
    return crypto.createHash('md5').update(data).digest('hex');
}

http.createServer(function (request, response) {
    if (request.url === '/') {
        const html = fs.readFileSync('index.html', 'utf-8')
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end(html)
    }
    else if (request.url === '/script.js') {
        //浏览器缓存的hash
        const noneMatch = request.headers['if-none-match']
        const filePath = path.join(__dirname, request.url)
        const buffer = fs.readFileSync(filePath)
        const fileMd5 = md5(buffer)
        if (noneMatch === fileMd5) {
            response.statusCode = 304 // 304 表示缓存未修改Not Modified
            response.end()
            return
        }
        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'max-age=0',
            'ETag': fileMd5 
        })
        const readStream = fs.createReadStream(filePath)
        readStream.pipe(response)
      
    }
})

.listen(1234, () => {
    console.log('启动启动启动，还有这个，1234！')
})