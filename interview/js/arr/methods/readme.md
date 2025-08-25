# 数组上的方法

*分纬度回答，带上业务场景*

- 是否修改原数组，非纯函数，有副作用
    push/pop/shifft/unshift  栈/队列操作
    shift /unshift 性能差，因为它会去移动元素，数组是连续的
      - splice(可以做删除/插入/替换)
      splice( start ,deleteCount ,item1 , item2, ...)


- es6新增方法
- 遍历/查找类/转换类/拼接类/统计类