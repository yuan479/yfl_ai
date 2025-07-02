
//es6 模块化
//mjs 后缀使用es6模块化
//模块化是语言的能力
//mjs改成js后：SyntaxError: Cannot use import statement outside a module
//node 默认不支持es6模块化 但是最新版本支持 node22
// node 准备跟require commonjs 说再见了
// es6 module 更先进 mjs
import http from 'http'

const server = http.createServer((req, res) => {
    res.end('我是es6模块化')

})
server.listen(1234)