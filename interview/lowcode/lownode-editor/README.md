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