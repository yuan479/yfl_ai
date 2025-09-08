# 手写 React

*Dideact*
  - 并非一个真实的生产级库，而是一个用来拆解 React 核心原理的 “迷你实现示例”。其核心目的是通过极简的代码，模拟 React 处理 JSX、生成虚拟 DOM（VDOM）、渲染真实 DOM 的核心流程，帮助开发者理解 React 底层工作机制（比如 “JSX 如何变成页面元素”“虚拟 DOM 是什么作用”）。
  - 命名空间 namespace
  - 对象字面量

*VDOM 虚拟DOM树*
  - UI 表达 JSX
  - JSX 如何转成 VDOM ?

*JSX react 优点*
  js 里编写HTML ，及其便捷的表达UI
  babel React.createElement
  Dideact.createElement

- App.jsx -> babel -> Dideact.creacteElement( tag, props, ...childern)
- 返回的结果是一个 VDOM ，VDOM 交给 render方法，生成真正的 DOM

- babel 将JSX 转译为React.createElement 方法调用，给相应的参数，生成VDOM
  @babel/preset-react pragma 编译后的函数名
  pragma JSX 不是？？的专属，

*createElement*
- App.jsx -> babel -> Dideact.creacteElement( tag, props, ...childern)