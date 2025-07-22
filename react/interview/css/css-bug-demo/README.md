# css 模块化

- Button AnotherButton 按钮组件
  自己写的组件
  别人写得组件
  第三方的组件
  冲突
- 唯一的类名如果要自己取 麻烦
- 模块化的能力，不会影响外界，也不会被外界影响
  - 方法1： style.module.css 模块化
    - react vite
      通过唯一的hash值，加到类名上，来保证类名的唯一性
    - vue scroped
    - 但是可读性受到影响？
      错误，读的是源码，.button 只是被模块化保护起来了
      - npm run build 打包
      - dev 和 build /test /product
        开发的时候在dev 代码的可读性
        vite,react .jsx  babel preset-react,
        style.module.css
        import style from './style.module.css' 提供一个匿名对象
        styles js 对象 css 的每一个类名都可以面向对象
        访问绑定

        npm run build
        打包前要npm run test 测试
        没有问题就alyun ngnix 跑起来 dist/