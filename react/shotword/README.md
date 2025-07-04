# AI 单词拍照移动应用

- mobile App

- css react

- 组件划分思维
  - 按功能逻辑划分
    - 图片上传
    - 学习卡片

  - App 根组件
  - PictureCard 子组件
  - 组件通信
    - 父组件负责持有状态
    - 父组件负责 API 请求
    - 子组件消费数据
    - state（私有数据状态） props（外界传入的数据状态） 都是数据，但是身份不一样
    - 子组件如果要修改状态，需要通过回调函数传递给父组件，父组件修改状态后，子组件重新渲染

- 目录结构
  - src/开发目录
  - components/组件目录
    - 一个组件就是一个文件夹
      - jsx
      - css
  - public/静态资源目录
  - lib/工具类目录
  - .env.local ai api-key token 等环境变量 