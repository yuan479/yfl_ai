# 全家桶之Zustand 状态管理

- 现代的前端开发模式
  - UI组件开发 + 全局应用状态管理
- 轻巧、hooks 化的状态管理库
  - count 响应式状态
  - 怎么变成全局应用管理？
    用useContext + useReducer + React.createContext 
  - redux/zustand 简化开发流程

- 小项目 store 没必要
- 中大型项目 router store 都上
  - react- router-dom
  - zustand 使用之后，全部用状态管理，我们的组件都是UI组件
    组件状态 收归中央（store）统一管理

