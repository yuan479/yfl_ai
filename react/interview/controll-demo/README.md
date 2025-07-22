# 受控组件和非受控组件

- 聚焦于表单 收集用户数据
  做法:
    - 受state的控制
      value={state} onChange={(e)=>setState(e.target.value)}
      频繁更新状态
      性能开销大 表单检测用受控组件，节流，
    - 非受控
      另外一种收集用户输入的方法
      性能好 适合于交互不强的
