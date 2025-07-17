# 路由

## 传统页面开发
  - 用a href ，有重要的用户体验缺失
  - 每次加载页面都要请求一次，去到后端拿到新的html ，重新渲染
    a 标签切换页面，会白屏
  - 相比于react-router-dom 只绘制一部分，局部热更新
    由前端路由去负责

## 新的react-router-dom SPA 单页应用
  只有一个页面，但是它能带来多页面效果

## SPA
  - Single Page Application
  - 只有也只需要一个页面
    组成:
      - react 组件
        页面级别组件
      - Routes/Route 声明 ，在文档流中占位
      - Routes 外面 或 Outlet 外面 是不用更新的
      - url
      - Routes 内部显示哪个页面组件  热更新
      - 用一个页面完成多个页面的显示
      - SPA 页面体验好

## 核心
  - url 切换
    不能用a 用link
    url发生改变，可以不用发生请求，拦截了这个请求，而是作为一个事件触发，使用js动态加载
  - 事件 hashChange / pushStart 事件
  - 在事里面，根据当前的url 取出对应的组件
    - 去替换掉之前的页面级别组件
  - 良好的体验:
    url 改变了，竟然不用刷新整个页面
    不再看白屏
    而且页面展示非常快
    About Home 全是前端组件，不用跑后端拿一次，全部重新组装


## url 改变，但不重新渲染的解决方案
  - hash 的改变 不是html5 而是很早就有的
    原来是用来做页面锚点的，主要用于长页面的电梯
    #/  变成 #/about 
  - 触发一个事件
    hashChange 

## 基于SPA 
  - url可以改变，但是不会向后端发送请求，而是前端路由
    - 如何路由改变，但不切换页面
      - hash +hashChange 事件 +DOM
      - history + pushState /popState 事件 + DOM
  - 前端路由react-router-dom 配置，页面级别组件，进行热更新
    - Outlet 占位
  - 单页应用 只有一个页面，但是可以有多个url，url 成了一种路由状态
    它有很多的路由状态，和多个页面级别组件
    window.location  window.history
    浏览历史通过栈生成，变成了一种路由状态

## history
   很早就有了，它可以使用history 在历史记录游走
   - html5 赋予history 新的功能
     - 因为hash + hashChange 有优点，但是缺点也很大
       优点：兼容性好，什么浏览器都能用
       缺点：http://127.0.0.1:63743/3.html#home
       hash 不好理解
       不能这样，要像传统后端路由一样
       http://127.0.0.1:63743/首页
       http://127.0.0.1:63743/about 关于
      - 要怎么像后端路由一样，不刷新页面？
        html5 升级了history api 来实现


