# deep router

- router
- 401 Unauthorized 表明客户端需要进行身份验证
- 301 / 302 重定向
- 404 Not Found 表明客户端请求的资源不存在
- 性能优化

- SPA 带来了优质的用户体验
  - 快速加载
  - 不会白屏
  - 不依赖于http 去服务器端请求页面

- 前端首先加路由，开发SPA应用
  前端三剑客： React ReacrRouter Redux

- 导航，通用区域进行封装
- 路由懒加载
  - 当为 / 的时候，按道理只加载home ,在 /about 只加载About
    怎么验证？  console.log
  - 我们需要只加载当前需要的，其他的不加载
  - 我们要最快的速度把首页加载出来
- es6 module 引入模块并且会执行
