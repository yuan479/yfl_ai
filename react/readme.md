# react 业务
  friends 数据
  App
  挂载点
  页面的显示
  - 原生js
    DOM编程
    底层 API 不够高效
    聚焦于业务
    前端切图崽（html,css + 一点css）->前端开发工程师 （微博，美团...）->
    js框架（vue/react）-> node 开发全栈开发 （node+数据库） ->
    react native Android +ios App -> AIGC AI应用 -> 全干工程师

Web 应用 （www.baidu.com）  移动应用（Android ,IOS ）
Node（server）AI 统领一切 == js 全干工程师

## 项目的创建
  npm 是什么？ node package manager
  node 包管理器 安装react -->提供 App 开发能力
  npm init vite 
 - react
 - js
 项目模板，基于他开始开发
 - cd 项目名
 - npm  i 安装依赖
 - mode _modules 安装依赖的包
 - npm run dev 启动项目
  3000 端口启动应用

## 5w
- what web app
- how npm init vite 初始化vite项目模板
- 安装依赖
- 启动应用 http 5173 react 技术栈 web app
  远离js api 编程， 面向业务 

## TODOS 任务列表
  - 数据 ['脱单','摆烂','国泰民安']
  数据在页面上渲染 react 提供点啥 支持这个业务

## react 初体验
 - react 组件是完成开发任务的最小单元
 - 组件组合 html, css, js
 - 组件是一个函数
 - 返回htnl
 - 函数里面return之前可以申明数据和业务逻辑
 - {} js 表达式 不用写DOM API 而完成 DOM 的显示

## 响应式数据
- 数据是会发生改变的，数据状态 state
- [todos，setTodos] = useState（初始值） 声明数据 使用一个数据状态返回一个数组
- 数据第一项，数据项
- 项目第二项 修改数据的方法 
