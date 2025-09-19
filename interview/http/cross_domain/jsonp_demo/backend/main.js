// server.js - 原生 Node.js 版本
const http = require('http');

const server = http.createServer((req, res) => {
  // 匹配 GET 请求 /say
  //es6 字符串方法
  if (req.url.startsWith('/say')) {
    // 解析查询参数（简单处理）
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log('芜湖~，这是',url,'这是req.',req.url);
    const wd = url.searchParams.get('wd');
    const callback = url.searchParams.get('callback');

    console.log(wd);      // Iloveyou
    console.log(callback); // show

    // 返回 JSONP 格式响应
    res.writeHead(200, { 
      'Content-Type': 'application/javascript; charset=utf-8' 
    });
    const data ={
      code:0,
      msg:'我也喜欢我自己'
    }
    res.end(`${callback}(${JSON.stringify(data)})`);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('开始运行，地址为 http://localhost:3000');
});