# 路由

history hash

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
  - 良好的体验是
    url 改变了，竟然不用刷新整个页面
    不再看白屏
    而且页面展示非常快
    About Home 全是前端组件，不用跑后端拿一次，全部重新组装
