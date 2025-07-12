# event loop(js事件循环机制)

## js 单线程
  同一时刻只做一件事
  同步任务需要尽快执行完，因为要尽快渲染页面（重绘重排），响应用户的交互
  
  有没有耗时性的任务？
  - setTimeout / setInterval
  - fetch / ajax
  - eventListener

执行时如果有一个耗时性的任务怎么办？
不能等它，而是先执行其他任务，等它执行完了，再回来执行
- script 脚本是一个**宏任务** ：

## 微任务
    紧急的，优先的，同步任务执行完成后的一个补充
  - promise.then
  - MutationObserver
    dom 改变在页面渲染前， 拿到DOM有啥改变？
  - queueMicrotask
  - process.nextTick()
