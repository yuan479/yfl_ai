console.log('同步开始');

// 同步任务
const promise1 = Promise.resolve('第一个 promise')
const promise2 = Promise.resolve('第二个 promise')
const promise3 = new Promise(resolve => {
    resolve('第三个 promise')
})



// 异步任务
/* promise1.then(value=>{
    console.log();
}) */

//宏任务
setTimeout(() => {
    promise2.then(value => {
        console.log("下一轮再见");
        const promise4 = Promise.resolve('第四个 promise')
        promise4.then(value => {
            console.log(value);
        })
    })
}, 0)

setTimeout(() => {
        console.log("下两轮再见");  
}, 0)

promise1.then(value => console.log(value))
promise2.then(value => console.log(value))
promise3.then(value => console.log(value))

console.log('同步结束');