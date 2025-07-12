console.log("开头");

//process 进程对象
process.nextTick(() => {
    console.log("微任务:Process Next Tick");
});

Promise.resolve().then(()=>{
    console.log("微任务:Promise");
})

setTimeout(() => {
    console.log("宏任务:setTimeout");
    Promise.resolve().then(()=>{
        console.log("微任务:setTimeout --> Promise");
    })
}, 0);

console.log("结尾");