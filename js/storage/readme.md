# Storage 存储

## 前端存储
  - cookie 存储什么？
      登录状态
      购物车
  - localStorage 持久化存储
  - sessionStorage 临时存储
  - IndexDB 数据库存储

## 后端存储
  - MySQL  NoSQL   MongoDB 
  - 缓存

## node 后端
    1.如何用node启动http服务
    http模块是js的内置核心模块，不需要安装，直接引入即可使用
    js在命令行运行
    s有两种模块化系统：以require node为代表的commonjs规范，es6更先进的模块化方案
    ole module 
    node 很受欢迎 适合中小项目开发
    端口 -> 某个服务
    3306 mysql 服务 进程（资源） 线程（执行）
    demain(localhost) ->ip地址（127.0.0.1）->某台设备->port设备上的某个服务（进程）
    一台设备上可以有很多端口使用，有多个http服务 多个网站，不要使用一些特殊端口

    - nodemon server.js

## 首页
    - 用户登录状态
    cookie
    - 服务器（分为硬件和软件）
    - 本源：B/S 架构模式 http协议
    - http 0.9 版本 ， 那时没有关于身份的东西 
      那是无状态协议 -> 请求一次和一千次拿到的内容都一样
    - 如何在请求当中添加身份转态？

    - http 1.0 版本 ， 正式版 正式有了请求头
      Content-Type
      Authorization
      Cookie uid = 1000000
      用户带上， 服务器再解析，就知道你的身份
      http 协议还是无状态的，请求头，可以夹带一些私活
      - 界面有哪些状态 未登录，已登录，显示用户身份 有一个时间 过了会过期，主动登出


## 前后端联调
  - 前端负责表单 
    阻止默认行为
    收集表单值
    fetch 一个请求 await 等待服务器端响应请求
    前端和后端交接 POST/login -> api 对接地址/接口地址
  - 后端
    通过接口地址，构建后端路由
    用户名和密码的校验
    通过cookie 设置响应头:Set-Cookie
    服务端的返回,http 一起到请求端
    前端存储里 Cookie 里面有了内容

## Cookie
  - Cookie 是浏览器存储的小文本数据，用于记录用户会话、偏好等信息，便于网站识别用户。
  - 每次http的时候，会自动带上cookie信息
  - cookie 小饼干（内容小） 关键是身份信息，存储再浏览器中（位置）
  - http协议还是无状态的，每次请求独立，它是通过在请求头携带cookie信息，实现身份认证