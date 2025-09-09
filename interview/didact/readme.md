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
    返回的结果：VDOM
    由 VDOM节点组成的 VDOM树，每个节点包含 type , props两个属性，props.childern是子节点，也是一个对象

    React.createElement 返回的 Element 就是一个描述“要在页面上渲染什么”的普通 JavaScript 对象（即虚拟 DOM 节点），它包含 type、props 等属性，是 React 用来对比变化并高效更新真实 DOM 的虚拟表示。

- createTextElement 为什么这么复杂？
    type 没有
    childern 没有
    一切为了统一，执行render

*目前完成*
- React is a namespace
- The createElement Function (工厂模式)
- The render Function
- Concurrent Mode 并发模式
- fiebers 机制，可中断，优化

*Concurrent Mode 并发模式*
  React Concurrent Mode 是一种让渲染过程可中断、可优先级排序的机制，通过将工作拆分为小块并允许高优先级更新（如用户输入）插队，从而避免主线程阻塞，提升应用的响应性和流畅度。
  fiber 就是一个工作节点
  - 中断 
  - 继续
  - fiber 节点对象有哪些属性

*Render 分成两个阶段*
 - 渲染阶段：构建新的虚拟 DOM树，diff patches[]
 - 提交阶段：把改变应用到 DOM上

*diff算法*
可以看：https://juejin.cn/post/7114177684434845727?searchId=202509091733289F750F07EE430DF1D6C0#heading-1
- 同层级比较，否则时间复杂度会变成O (n^3)
- 但是如果ABCDE -> EABCD 
  dom开销比较大
  diff 算法除了考虑本身的时间复杂度之外，还要考虑一个因素：dom操作的次数
  移动操作比新增 + 删除操作要少，所以diff 算法会优先考虑移动操作。
  insertBefore 
**简单diff算法**
ABCD -> DCAB
多节点 diff 算法的目的是为了尽量复用节点，通过移动节点代替创建。
ABEC ABC
  你问newChildren
