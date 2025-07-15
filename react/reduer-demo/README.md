# reducer

## 聊聊组件通信
  单向数据流 
  - 父子组件通信 props
  - 子父组件通信 自定义事件props传递
  - 兄弟组件通信 通过父组件中转
  - 跨层级 全局通信 useContext
  - useContext + useReducer
  - redux

## useContext + createContext 打理复杂的全局跨层级共享
  - 层级太深时，useContext 有些力不从心了
  - useReducer 全局状态**管理**
    - 多状态才需要管理
    - 要像经营一个公司一样，指定一个制度
      - 单纯 reducer 纯函数

## 纯函数和规定

## useReducer
  - useState 响应式状态
  - useReducer 响应式状态管理
    