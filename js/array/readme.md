# Array 的高级考点

## 怎么认识数组
  - 在js中，数组是一种可遍历的对象

  - new Array(5) 类似于c++，对数组进行固定大小的分配
  - v8 引擎对 array 进行了一个设计
    - 可以灵活的扩展，还能不限类型，背后还有hash 的特性
    - 实例化之后是一个empty * 5，表示key还没有释放，所以for key in 不可迭代
    -new Array(5).fill(undefined) 统一
    

  - [] 数组字面量
    ['张三'，'李四'，'王五','赵六',...arr] 

  - 静态方法
    Array.of(1，2，3) // 已经有了数据
    Array.from() // 转换，（类数组，填充计算）
   
## 如何遍历数组
  - for(let i = 0; i < arr.length; i++) 计数循环 性能好，可读性差，适合机械阅读
  - while 机械化，适合底层
  - forEach 不能够退出
    const names = Array.of('张三','李四','王五','赵六')
    console.log(names)
    names.forEach(name=>{
      if(name === '李四'){
        console.log('李四在此')
        break // 报错
        return // 不报错，但是没有退出
      }
    })
  - map filler find some every ...
  - for of 