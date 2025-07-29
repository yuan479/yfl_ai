# react 旅游 App
Readme.md 很重要 方便面试官了解
## 移动App
- 模仿一个App，
  - 喜欢的||国外的
  - 不要一样，要改变
- 要涵盖绝大多数考点
  - 里面的技术要适用于所有App

## 技术栈

### React 全家桶
  React 组件开发
  组件封装
  第三方组件库
  hooks 编程   自定义hooks
  - react-touter-dom
    - SPA 单页应用
    - 路由守卫
    - 懒加载
  - zustand
### mock 接口模拟
### axios 请求拦截和代理
### jwt 登录鉴权
### module css模块化
### vite 配置
### 性能优化
  防抖节流
  useCallback useMemo ...
### css 预处理器 stylus
  - flex transition transform...
### LLM
  - chat 
  - 生图
  - 语音
  - coze 工作流 调用
  - 流式输出
### 移动端适配
  - rem 布局

### 单例模式 设计模式的理解

- git 提交等编程风格

## 项目架构
- components
- pages
- store
- hooks
- api
- mock


## 开发前的准备
- 安装的包
    react-router-dom
    axios
    zustand
    react-vant
    开发期间的依赖:
    jwt
    vite-plugin-mock  

- vite 配置
  - alias
  - mock
  - .env.local
  - llm apiKey
  - user-scalable
  - css 预处理
    index.css  -->reset
     box-sizing font-family:-app-aystem
    App.css  --> 全局样式
    module.css  --> 模块化样式
  - 移动端适配 rem
    - 不能用px,用相对单位 rem ->html
    不同设备体验效果要一致，要在不同尺寸收集等比缩放
    设计师的设计稿：750px iphone 4  375pt *2 =750
    css 一行代码 让收集的不同尺寸 html font-size 等比例
    - layout 
    flexible。js 阿里 在任何设备上，1rem = 屏幕宽度/10

- lib flexible
来自阿里开源
设置 html fontSize = window.innerWidth /10
 css px 宽度=手机设备宽度
 1排序=2 发光源 所以是750像素的

 - 设计稿上一个盒子的大小?
   - 一个像素不差的还原设计稿
   - 设计稿中像素单位
   - /75

## 项目亮点
  - 移动端适配
    - lib- flexible 1rem = 屏幕宽度/10
    - 设计稿 尺寸是iphone标准尺寸750px
    - 前端的职责是还原设计稿
    - 频繁的单位换算 260/75 进行换算
    - 如何换算自动化
      postcss + postcss-pxtorem
      postcss 是css预编译器，很强大
      vite自动读取postcss.consig.js 将css内容预编译
      px——>rem

## git 提交规范
  - 项目初始化
## 功能模块
  - 配置路由及懒加载
  - chatbot 模块
    - llm 模块 chat 封装
    - 迭代chat ，支持任意模型
## 项目亮点和难点
- 前端智能
  - chat 函数
  - 对各种模型比较感兴趣，升级为kimiChat,dobaoChat
    可以随机切换大模型，通过参数抽象
- 原子css
  - app.css 里面添加通用样式
  - 各自模块里的module.css不影响其他
  - lib-flexble 移动端适配
  - postcss pxtorem 插件 快速还原设计稿
  - 原子css, 一个元素按功能逻辑拆分成多个类，和原子一样
    元素的样式就可以由这些原子类组合而成
    样式复用更好，以后几乎可以不用写样式
- search 
    - 防抖
    - api 接口
      Google Suggest
    - loavlStroage

- 用户体验优化
  - 搜索建议防抖 +useMemo 性能优化
  - 组件粒度划分
    React.memo + useCallback
  - 懒加载
  - 热门推荐 + 相关商品
  - SPA
  - 骨架屏 不用让用户等待

  - 文生图
    优化prompt设计
## 项目遇到什么问题  怎么解决
- chat messages 遇到message 覆盖问题
  这是一个闭包陷阱，一次事件里面，两次setMessages()
  
  - UI 组件库
    - react-vant 第三方组件库， 70%的组件已经有了，不用写
    - 选择一个适合业务的 UI组件库  或者公司内部的组件库
  
  - 路由配置及懒加载
    - 懒加载
    - 路由守卫
    - Layout 组件
      - 使用嵌套路由Outlet 分组路由配置
      - 网页有几个模板 Layout
        - Route 不加path 它让对应的路由自动选择
        - tabber 模板
        - blank 模板

    - tabber
      - react-vant + @react-vant/icons
      - value + onChange 响应式
      - 直接点击链接分享 active 的设置

    - 自定义标题
      - useTitle 一定要设置

    - es6 特性使用
      tabber 的高亮
      - arr. findIndex
      -str.startsWith
      - promise

  - 项目迭代
    - 功能由浅入深
    - chatbot deepseek 简单chat
    - deepseek-r1 推理模型
    - 流式输出
    - coze 工作流接口调用

## 通用组件开发
- Loading
  - 居中方案
    position :fixed + tlrb 0 +margin auto
  - React.memo
  - anmimation
