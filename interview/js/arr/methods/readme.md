# 数组上的方法

*分纬度回答，带上业务场景*

- 是否修改原数组，非纯函数，有副作用，慎用
    push/pop/shifft/unshift  栈/队列操作
    shift /unshift 性能差，因为它会去移动元素，数组是连续的

  - splice(可以做删除/插入/替换)
    splice( start ,deleteCount ,item1 , item2, ...)
    sort 排序

- 不会修改原数组的方法，纯函数，（推荐）
  - forEach 无返回
  - map 返回新数组
  - 查找类
      find , findIndex , findLastIndex , findLast
      在es5里面，提供了indexOf , lastIndexOf
      es6 提供了find ,查找满足条件的第一个元素，
      findIndex 查找满足条件的元素，第一个元素下标
      includes，是否包含
      在最近的版本中，es15 2023 findLastIndex
  为什么叫ES6而不是JS6？
    JavaScript 是基于ECMAScript 脚本标准开发的
    ES5 兼容性
    ES6 新特性
    ES6+ 对新特性持续性关注

  - 过滤和判定
      filter
      every
      some
      any

  - 拼接/裁剪
      concat slice
  - 扁平化
      flat 
  - 迭代器 iterable
      keys(), values(), entries()
  - join/ toString() 拼接
  - 归约
      reduce 相加
  - 静态方法
      Array.isArray
      Array.from()
      Array.of
  
- es6新增方法
- 遍历/查找类/转换类/拼接类/统计类