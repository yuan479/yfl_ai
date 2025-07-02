// node 后端
// 1.如何用node启动http服务
// http模块是js的内置核心模块，不需要安装，直接引入即可使用
// js在命令行运行
// js有两种模块化系统：以require node为代表的commonjs规范，es6更先进的模块化方案
//ole module 
// node 很受欢迎 适合中小项目开发
// 端口 -> 某个服务
//3306 mysql 服务 进程（资源） 线程（执行）
// demain(localhost) ->ip地址（127.0.0.1）->某台设备->port设备上的某个服务（进程）
//一台设备上可以有很多端口使用，有多个http服务 多个网站，不要使用一些特殊端口



const http = require('http');// 引入内置的 http 模块，用于创建 HTTP 服务器

// 引入 fs 模块，用于读取和操作文件系统中的文件（例如 HTML 文件）
const fs = require('fs'); // 文件系统模块，用于操作文件

// 引入 path 模块，用于处理和拼接文件路径，确保在不同操作系统下都能正确工作
const path = require('path'); // 路径模块，用于处理文件路径

// 创建一个 HTTP 服务器实例
const server = http.createServer((req, res) => { // req 是请求对象，res 是响应对象

    // 判断请求方法是否为 GET，并且请求的 URL 是否是根路径 '/'
    //为了请求资源
    if (req.method == 'GET' && (req.url == '/' || req.url == '/index.html')) {//路由；Method +url 定位服务器端的资源
        // 使用 path.join 拼接文件路径：当前目录 + public 文件夹 + index.html

        console.log(__dirname);//当前目录
        console.log(path.join(__dirname, 'public', 'index.html'));
        
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            //callback 回调函数，当文件读取完成后会执行这个函数
            (err, content) => { 
                //前端体验为主，后端稳定为主
                if (err) { // 如果读取过程中发生错误
                    res.writeHead(500); // 设置 HTTP 状态码为 500（服务器内部错误）
                    res.end('error');   // 返回错误信息给浏览器
                    return;            
                }
                // 返回给浏览器的内容不只是html,css,js...
                res.writeHead(200, { 'Content-Type': 'text/html' });// 设置 HTTP 状态码为 200（成功），并指定响应内容的类型为 HTML
               res.end(content);// 读取成功，将文件内容作为响应体返回给浏览器
            }
        )
    }
    //通过后端路由暴露资源
    //http://localhost:8080/style.css  协议：//域名/端口号/路径/参数
    if(req.method=='GET'&&req.url=='/style.css'){
        fs.readFile(
            path.join(__dirname,'public','style.css'),
            (err,content)=>{
                if(err){
                    res.writeHead(500);
                    res.end('error');
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/css'});
                res.end(content);
            }
        )
    }
    if(req.method=='GET'&&req.url=='/script.js'){
        fs.readFile(
            path.join(__dirname,'public','script.js'),
            (err,content)=>{
                if(err){
                    res.writeHead(500);
                    res.end('error');
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/javascript'});//拿到后下载，执行
                res.end(content);
            }
        )
    }
})

// 让服务器监听本地的 8080 端口
server.listen(8080)