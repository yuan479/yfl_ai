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

