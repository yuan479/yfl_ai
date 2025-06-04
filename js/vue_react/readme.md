# js(原生)->vue+react

## 语义化标签
  - 图表， 表格 给老板看
    table
      thead
        tr
          th
      tbody
        tr 
          td
## DOM 编程
  通过操作DOM节点，将界面动态更新

## 样式 前端负责用户体验
  - 不用去自己写细节和重复代码 ， focus 于业务 （熟）
  - 引入第三方库 bootstrap PC 端的 css框架，业务类
  - .container 容器 固定宽度
  - table 

## 如何将JS 代码交给业务去做 ，focus 于业务
  - jquery 退出了历史舞台
  - vue 
    聚焦于业务
    friends 数据
    显示于 tbody 挂载点上
    远离API 循环输出 tr

  - react


## 现代前端开发框架
- 离开原生js 的刀耕火种
- 聚焦于业务
  - App 的概念
  切图崽 html + css + 简单的js （DOM +event）
  应用开发工程师
  Vue。createApp(App).mount('#app') //mount:挂载  #app: 选择器
  #app 是这里面支持Vue app 接管
  不用低级的DOM API 
  - 循环输出数据 
    - vue 在 App 中提供了data（）{
      friends
    }
    - tr v-for 配合循环输出的业务

## react 来自于 Facebook 适合大型应用
  - 创建一个 react 应用
    -  npm init vite 初始化一个项目

