# vue 中的hooks

- 你用的react 是什么版本的？
  react 19 
  react 16.8 有一个划时代的更新，函数式组件和hooks 2019年
  在此之前，老项目都是类组件，Component 基类
  那时虽有函数组件，但是用来做子组件 + 父组件 通过peops传递数据，是无状态组件
  无状态组件以UI展示为主，Stateless 特点是简单，性能好
  函数组件 + useState +useEffect... hooks ，类组件就没有必要了

- 类组件
  和函数组件都有，各司其职
  - 类组件比较固守于类的格式，比较繁琐
  - this 丢失问题，在事件处理的时候
  - 生命周期钩子函数 由useEffect 副作用代替
  - 类组件 开销大，性能差，函数组件结合memo和useMemo 更好的性能优化

  - Vue 抄袭了React 
    - hooks 函数式编程思想

- vue 和 react 相同点和区别