//worker.js:1 Uncaught ReferenceError: document is not defined
//因为它不是js单线程
//worker 线程，用来做复杂或耗性能的计算
//这个能力来自于浏览器
//js 还是单线程，只不过在复杂计算时使用worker线程
//线程间的通信，靠消息机制

console.log(this)//不能用document，this也不是原来的this，一般用self
self.onmessage = function(e){
    console.log(e.data)
    self.postMessage('这一定是个不同以往的烂漫故事')
    
}

// ❌ 错误：Worker 中不能访问 DOM
// console.log(document.getElementById('box'))

// ✅ 正确：Worker 只能做计算，不能操作 DOM
console.log('Worker 线程运行中...')
