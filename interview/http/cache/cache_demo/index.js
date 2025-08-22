const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.url === '/') {
        //下载index.html
        // sync是同步读取文件 ，async 是异步
        //fs.readFile('./index.html',function(err,data){})
        //性能差点
        const html = fs.readFileSync('./index.html', 'utf-8')
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }
    else if (request.url === '/script.js') {

        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control':'max-age=20,public'
        })
        const script = fs.readFileSync('./script.js', 'utf-8')
        response.end(script)
    }
})
    .listen(8888, () => {
        console.log('启动启动启动，还有这个，8888！')
    })