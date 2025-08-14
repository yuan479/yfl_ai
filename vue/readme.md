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

- hooks 表达总线
  - 什么是hooks？
    能够在不编写类的情况下，使用React的状态和生命周期特性的函数。Hooks 提供了一种更直观、更灵活的方式来组织和复用组件中的逻辑和响应式业务。
    react 内置的hooks useState, useEffect 副作用等，挺好用的。
  - 内置的hook
    useState，useEffect(副作用)，useMemo，useContext，useReducer，useCallback，
    - useRef：用于创建一个可变的引用对象
    - useLayoutEffect：在 DOM 更新后、浏览器绘制前同步执行，适合用于需要读取 DOM 布局并同步更新的场景，以避免视觉闪烁。
    - useImperativeHandle：用于在函数组件中暴露自定义的 ref 值或方法。

  - 自定义hooks
    useTitle,useTodos,useRepos,useMouse
    将响应式业务和响应式场景封装到hooks目录下，方便复用，UI组件干净

  - ahooks 第三方 hooks/vueuse 库
    useToggle、useRequest(所有的请求，data,loading,error) 我在业务中就经常用