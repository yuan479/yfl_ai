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
    
## RepoList  功能模块
  - params 解析
    - 使用useParams 动态参数对象
    - 不要放到useEffect里面，一开始就要做
    - 校验id
      - 不要相信用户的任何提交
    - navigate('/') 返回首页， 这个放在useEffect中
 
## 组件的开发模式
  - UI 组件 亮点（JSX）
  - 自定义hooks useRepos 方便
  - 状态管理 上升到应用级别，所以应该归context 管
    - repos losding error =》context 的value
    - useReducer 提供 reducer 函数，重新计算状态，响应式状态管理
    
  - 
