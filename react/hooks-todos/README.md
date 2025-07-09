# hooks todos
  
- 安排一个css 亮点
  - stylus: css 的超集，它可以给css添加变量，模块化

  - 拥有vite 脚手架，所以stylus的预编译，只需要安装stylus，vite就能直接编译
    vite 来自 vue 社区
  
  - react 的组件设计
    - 开发任务单元
    - 设计组件
      界面功能 状态 响应式 
      - 新建todo 要有表单
      - 修改 要有列表
      - 删除 
    - 按功能划分 粒度
      - form 处理事件，收集用户输入
      - list 展示数据，处理事件
        - item 组件，有利于维护和**性能** 不用整个页面全部重新渲染
    
- 字体
  - 可以设置多个 ，看设备的支持，如果没有，用系统默认字体
  - 苹果设备优化 -apple-system 前端要负责用户体验，字体是其中之一。


- rem 
  - 相对单位
    移动端的重要单位 不要用px 它是绝对单位
      因为移动端宽高不定 用 rem vw/vh 相对单位，可以在所有设备适配
    rem 相对于html font-size
    vh 相对于视窗
    em 相对于父元素/自身的font-size等比例


- props  组件通信
  - 传递状态
  - 传递自定义函数
  - 直接解构，如果参数不多
    const {
      title, //任务
      onDelete, //添加
      } = props 单独解构


- 数据绑定
  - 变量  修改值
  - 数据状态
    - Data binding **数据**绑定  jsx就是静态的
      {} 数据绑定
    - 数据与界面状态的统一
      - 界面是由数据驱动的
      - 维护数据与界面状态的一致性，
    - 相应式的

  

- vue 和 react 区别
  - vue 好入门，api 好用
  - react 倾向于原生js 入门难
    hooks? 好用的函数，一般以use开头

- <input v-model=“text”/>
  <input value ={text} coChange={()=>setText(text)};/>
  react 坚持单向绑定