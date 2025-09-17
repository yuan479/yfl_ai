# Lowcode-editor
- npx create-vite lownode-editor
  react + ts
*editor 组件 低代码编辑器*
- tailwindcss
- pnpm i allotment 
  allotment 是一个用于 React 的可调整大小面板布局组件库，支持通过拖拽分隔线动态调整面板尺寸，常用于构建分屏布局（如编辑器、仪表盘等）。
  实现可调整的分栏布局
  - 左侧 物料区域
  - 中间 编辑区域
  - 右侧 配置区域
- 模块化开发
  - components
    - header
    - Material
    - Editor
    - Setting
*zustand*
- 编辑器编辑的本质是状态的更新
- 保存到数据库的都是json 数据，是低代码编辑的本质

*阿里的Antd 组件库*
- 来自蚂蚁金服
- pnpm i --save-dev antd

*物料区组件*
可扩展的组件库

*TypeScript*
Record<string, any> 是 TypeScript 中的一个工具类型，它表示一个对象，其所有属性的键都是字符串类型，而属性的值可以是任意类型（any）。

*拖拽生成*
- pnpm i react-dnd react-dnd-html5-backend
- react-dnd 是一个用于在 React 应用中实现拖放（Drag and Drop）功能的流行库，通过提供可组合的 API 和后端抽象（如 HTML5 或触摸）来简化复杂拖拽交互的开发。
- 我们在根上包着

*总结*
使用了aisuda阿里低代码编辑器，发现核心是一个json的数据结构。
一个通过children 属性串联的组件对象树。
allonment split pane 布局，用tailwindcss 写样式，zustand
来管理全局状态
数据结构就是树，并不复杂，但是是低代码编辑器的核心
- 物料区
- 编辑区
- 设置区

*遇到的问题*
**1. useDrop 的时候会插入多次**
**2.useDrop 多次重复，违法了dry原则**

