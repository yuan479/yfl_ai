# Storage 存储

- 前端存储
  - cookie 存储什么？
      登录状态
      购物车
  - localStorage 持久化存储
  - sessionStorage 临时存储
  - IndexDB 数据库存储

- 后端存储
  - MySQL  NoSQL   MongoDB 
  - 缓存

  - node 后端
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