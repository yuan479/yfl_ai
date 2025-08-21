# 工程化

- 哪些问题？工程一揽子方案
  - 启动一个web server 在5173端口 http模块？express框架
    将index.html作为首页
  - tsx->jsx->babel js
  - styl->css 文件
    ......
    工程化是基础，后方工作

- 怎么介绍vite
   <script type="module" src="/src/main.jsx"></script>
  vite 是一个基于原生ES模块(Webpack，浏览器很多还不支持模块化)
  - 兼容性问题
    IE 11 一下，不支持
  通过按需编译实现急速冷启动（快）与热更新的新一代前端构建工具
  - 为什么快？
    - 基于原生js模块，不需要打包所有文件，按需加载
  从main.jsx 入口文件进入，路由，api等都要执行，叫做模块的依赖
  main.jsx -> App.jsx 依赖App.css + react + components + router + api + store
  整理这些模块之间的依赖关系（依赖关系的链条）
  
- webpack
  vite之前的工程工具
  由于要支持老旧浏览器，不使用esm，要打包
- 举个例子：
  假设a依赖b，b依赖c，c依赖d
  不用模块化，先编译d
  d编译成js，然后放到最上面，c编译，放到d的下面，b放到c下面，a放到b下面
  这些文件一起打个包，成为一个文件，没有组件关系

## webpack 和 vite 的区别
- 在 index.html 里面没有<script type="module" src="/src/main.jsx"></script>，怕浏览器不支持esm
- webpack 整理关系，打包文件，慢
- 适合大型项目，因为它有丰富的配置（牛逼的说明书）
  - 配置entry 和output 这是核心
  - plugins 
      html-webpack-plugin 指定 html template 在哪
  - devServer
      http server 细节
  web bundler （web打包器） 一切（静态资源）皆可打包