# jsx 考点

## 何为jsx 
  (js in xml) html 是 xml的一种形式
  在js里面，用xml 表示ui的语法拓展
  react 推崇的javascript 语法拓展，允许在javascript 代码中嵌入html结构（function return jsx组件）
  常用于React 组件的定义，使ui结构更直观易读,这是react的一大优点特性

## jsx 能直接运行吗？
  不能，需要编译，babel 编译成js，编译成js 才能运行
  jsx -> React.createElement(tag, props, children)-> 
  docuument.createElement('ul')
    document.createElement('li')

  类似：
  .styl -> stylus 编译 ->.css
  <ul>
  <li key ={todo.id}>{{title}}</li>
  </ul>