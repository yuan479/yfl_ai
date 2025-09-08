//全局对象，指向下一个要处理的单元工作（即一个fiber节点）
// 何为 fiber节点 链表结构
let nextUnitOfWork = null
//浏览器空闲的时候调用
function workLoop(deadline){
    let shiouldYield =false//不中断
    while(nextUnitOfWork&&!shiouldYield){
        nextUnitOfWork = perFormaUnitOfWork(nextUnitOfWork)
        //如果任务时间小于1ms，停止执行，避免阻塞渲染
        shiouldYield=deadline.timeRemaing()<1
    }
}
//模拟实现，schedule 任务调度机制
requestIdleCallback(workLoop)