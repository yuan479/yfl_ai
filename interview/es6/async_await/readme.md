# async await 

*async await 是什么？ 怎么实现？*
是ES2017 引入的异步编程语法糖，让异步代码写起来像同步，解决了then 链式调用很麻烦的问题。

- async / await 组合使用

- async 声明的函数一定返回一个Promise

- await 会暂停 async 函数的执行，等待右侧的 Promise 解决后继续

- 本质还是异步的，它后面的代码会封装到 promise的 then里面

- 本质上async /await 是对Promise + Generator 的封装
  generator 思想很好
  用*区别于普通函数，用yield 来暂停，运行得到一个生成器迭代对象，next()拿到 value和 done状态（复杂）

  async 函数内部会被编译成一个状态机（等待？完成？判断）

- async/ await 简单优雅，但不能乱用，如果有并发的，请用 Promise.all

