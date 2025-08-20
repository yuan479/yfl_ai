//红绿灯

/*  同步阻塞
    sleep函数
*/
const sleep = ms => new Promise(r => {
    setTimeout(r, ms)
})


    (async () => {
        console.log('start')
        //还是异步，只是改变执行流程，要执行完才会执行下一个
        await sleep(3000)
        console.log('end')
    })

// 同时只能显示一个灯
// 显示的时间
// 轮询