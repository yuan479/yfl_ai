# 性能优化hook

 - 父子组件的渲染顺序
   - 执行的时候向外到内，组件树
   - 完成渲染，完成组件的挂载，先内再外

- Button 组件该不该重新渲染
  - 但是父组件局部，count 改变和Button 组件没有关系
  Button JSX 不去重新渲染，重拍重绘
- 
  - 性能优化
  - 响应式和性能 非常好
  - 切分组件 热更新
  - 组件之间独立
  - 子组件 React.memo
  creactContext useContext 所有的状态全部交给一个Context 好吗？
  不好，性能不好，所有状态都是通过一个reducer 生成，一发而动全身

- 组件划分的粒度
  - 组件拆分，实现单向数据流
  - 拆分成 就负责渲染的子组件 （props + jsx）
    除了复用好管理之外，还可以提升性能
    组件状态更新之后，组件函数要重新运行，使用useCallback +React.memo