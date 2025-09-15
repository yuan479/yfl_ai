# vue 全家桶
*共同点*
                vue                         react
MVVM响应式       ref                         reactive useState
路由             VueRouter                   ReactRouter
状态管理         zustand                     pinia

*项目架构*

*Vue 语法*
- SFC 单文件组件
- 模板语法
- 指令
- 事件
- 计算属性
- 响应式

*Store 状态管理*
- Pinia
- 第一个参数，状态管路的名称
- 第二个数组，

*typescript*
- vur-router 里的 RouterRecordRaw 帮助我们确保配置选项正确
  - 路由至少要有path 和component
  - name 属性 选填

*vite*
- alias
- 自动加载组件库组件 之后直接使用不用引用
    unplugin-vue-components/vite
    @vant/suto-import-resolver

*区别*
- react 单向绑定 绑定值 +事件
- vue 双向 v-model 指令