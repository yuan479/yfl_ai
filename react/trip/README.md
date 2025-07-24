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

## git 提交规范
  - 项目初始化
## 功能模块
  - 配置路由及懒加载