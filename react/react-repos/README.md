# react repos 项目开发
  - api.gittub.io/user/yuan479/repos
  - 综合react 开发全家桶，项目级别，大型的，性能好
  - todos
  - 

## 路由设计
  - react-router-demo
  - /repos/:username
  - /repos/:id
  - 路由懒加载 
  - hash 路由 / history 路由
  - 路由守卫 （略）
  - useParams :username

## 数据管理
  - App 应用级数据管理 可以跨层级共享
  - 管着repos
  - useContext +useReduser + hooks
  createContext 声明 + reduce + useRepos 编写


## react
  - 组件粒度 小

## api
  - fetch
  - axios http请求库
  - 独立的模块，所有的请求会从组件之中分离到api目录下

## 项目目录结构，项目架构
  - api 
    放应用中的所有接口
  - main.jsx
    主入口文件
    添加路由功能，SPA
    添加全局应用状态管理
    
