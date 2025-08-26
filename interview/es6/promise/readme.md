# Promise.all 
  可以并发处理多个Promise，只有全部成功才成功

  - MDN 定义
      Promise.all 方法接受一个 Promise的 **iterable** 类型的输入( Array, Map, Set都属于 ES6的 iterable类型)，并且只返回一个 Promise实例。

      输入的所有 promise的 resolve回调结果是一个数组，并按顺序存放，只要任何一个输入的reject回调执行，就会抛出错误，Promise.all 的promise就会失败，catch执行，如果有多个reject，则只抛出第一个错误

      如果有Promise 子项失败，其他还没有完成的promise会继续执行，但是结果不重要，因为all是要所有都成功才能得到数组。

  - race , any , allSettled
      这一组Promise 上的静态方法，带来了 Promise 的并行
      async await 简单，不需要then的链式调用，优雅的异步变同步，但也不能乱用，它是串行的，如果多个promise值前后有依赖，那么async/await 有优势，如果没有，Promise.all并发更快

      如果有并行的业务需求，all/race/any/allSettleted 更加适合且高效。

**Promise.all()**	
全成功才成功：所有 Promise 都 fulfilled 时，它才 fulfilled；任何一个 rejected，它就立即 rejected。
**Promise.race()**	
谁快听谁的：哪个 Promise 最先完成（无论 fulfilled 或 rejected），它的结果就决定了 Promise.race() 的最终状态。
**Promise.any()**	
首个成功即成功：只要有一个 Promise fulfilled，它就立即 fulfilled；只有当所有 Promise 都 rejected 时，它才 rejected（返回 AggregateError）。
**Promise.allSettled()**	
全部完成才结束：等待所有 Promise 都 settled（fulfilled 或 rejected），然后返回一个包含每个 Promise 结果（含状态和值/原因）的数组。
