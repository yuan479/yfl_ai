 # 微信当家框架WEUI

 ## BEM 国际命名规范

  - 项目 .weui-page 微信-页面
    - button 页面
 

  规范：
  -Block 概念
    - 一块内容 项目代号 设计风格 + 有哪些可复用的代码
      项目代号 + 区块的作用或职责 page
      .weui-page
      .tm-page
    - Element 概念
      - 元素 __header
        块__元素  项目代号 + 区块的作用或职责 + 元素的作用或职责 page__header
      同一块中概念不重叠
      .weui-page__title
      .weui-page__ desc

    - UI框架中button ， input， cell ，通用的组件
    重启BEM 命名
    .weui_btn  ** 复用**
    业务代码？
    大厂 ， 
    基础架构代码 学习 WEUI 的源码

    把几个block 组合起来， 页面就出来， 组件式开发

    - Modifier 概念
      状态
      .weui-btn_primary
      -weui-btn_default

    - BEM 规范让我们一起大厂协作
      -页面由Block 构成 .weui-{block}
      -Block 包含 Elements .weui-{block}__{element}
      -Elements 会有一些状态 weui-{block}__{element}_{modifier}
