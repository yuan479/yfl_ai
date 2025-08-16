# position

- 五种属性值 准确 简洁
  - static 默认值，不定位，回到文档流，让之前定位的元素回到文档流，取消定位
  - relative 相对自身原来的位置偏移，不脱离文档流
  - absoulte 相对最近的非static 祖先定位
    如果没有，那么相对最近的body 定位
  - flexd 相对视窗定位
  - sticky 粘性定位，是一种css定位方式，它让元素在滚动到特定阈值前表现得像相对定位一样，而在滚动到特 定阈值后固定在视口，实现类似吸顶或吸附得效果
  - 业务场景
    - 结合relative+absoulte 消息提醒，在右上角
    - absoult +transform 水平垂直居中 -> 模态框
    - filed 回到顶部 聊天客服图标
    - sticky 粘连导航 不管页面多长，导航在超出阈值后一直都在
      table 表头粘连，距离最近的具有滚动机制的祖先容器
      和IntersectionObserver 有点像
  - 底层
    - 定位参照系统
      absolute 最近position!==static 的祖先||body
      fixed 视窗？bug
      sticky 依赖滚动容器
      - 独立图层渲染
      absoult ? +?
    - 适当使用transform：translate3d(0,0,0)
        GPU 硬件加速，有利于css页面性能优化
        但也不能乱用，过多的图层会增加内存和管理开销
        比如登录弹窗，transform/opacity 动画

        will-chhange:可以触发独立图层
    
    - position:flexd 如果在transform:translateZ(0)下面，会失效，
      因为transform 会有一个新的包含块，fixed不再相对于视口定位，而是相当于这个transform容器

    - 打麻将 每道题都有惊喜
      面试是当面展示自己，可以准备的
      
## position 回答技巧
  先干净利落回答五种特性，再举出应用场景，提底层实现原理，图层和flexd失效作为亮点

  连锁：
  - 页面的渲染过程
  - intersectionObserver
  - 重绘重排
  
