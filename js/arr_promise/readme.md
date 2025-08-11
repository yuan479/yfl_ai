# 需求
*有两个接口，要去请求，不知道谁先完成谁后完成，但是要等全部加载后再继续执行接下来的*

http://api.github.io/users/yuan479/repos
http://api.github.io/users/yushunwu/repos

*有一堆的异步任务要执行*
- 每一项都是一个Promise
- Promise.all 本身返回一个Promise数组，因为它本身就是一个Promise
- 所有项都成功的解决了，Promise.all才解决，否则失败。
  - 如果都成功，每个Promise 的结果会按原 Promise 下标存放
- Promise.all 是静态方法，不是实例方法，不用new