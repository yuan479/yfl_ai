const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
/*     res.setHeader('Access-Control-Allow-Headers', 'PUT,POST,GET,DELETE,OPTIONS,PATCH'); */
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS,PATCH');
    //浏览器发送一个预检查请求
    if (req.method === 'OPTIONS') {
        res.writeHead(200); //同意
        res.end();
        return;
    }

    if (req.url === '/api/test' && req.method === 'PATCH') {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
           /*  'Access-Control-Allow-Origin': '*' */
        });
        res.end(JSON.stringify({
            msg: '成了! 哈哈哈，跨域成了！！！'
        }));
    }
   /*  if (req.url === '/api/test' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        res.end(JSON.stringify({
            msg: '成了! 哈哈哈，跨域成了！！！'
        }))
    } */
});

server.listen(8000, () => {
    console.log('CORS 服务器启动了，端口是8000');
});