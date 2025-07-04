# react hooks 编程
  useState 提供响应式业务
    - 非常好用的函数式编程
      函数是一等对象（js）
      函数还是类（js 原型式面向对象）
      函数也是组件， return 是 jsx
    - 以use 开头， 让react 函数式编程

## pnpm
  - pnpm 通过采用内容可寻址存储、符号链接、保持依赖树的层次结构、并行处理以及有效的缓存机制等方式，在确保项目依赖关系清晰的同时，极大地提高了包的安装速度，并且显著降低了磁盘空间的使用。

## useEffect 
  useEffect 是 React 中的一个 Hook，它让你可以执行副作用操作（side effects），比如数据获取、订阅或者手动修改 DOM。在类组件中，这些副作用通常是在 componentDidMount、componentDidUpdate 和 componentWillUnmount 生命周期方法中处理的。而使用 useEffect，你可以在函数组件中完成同样的事情。

  - 副作用

## 生命周期函数
  - mounted 挂载后(渲染完成)
    - 有没有一种副作用只有在渲染后执行，更新后不执行 [] 
  - updated 更新后 [] 它会有一个依赖项

  