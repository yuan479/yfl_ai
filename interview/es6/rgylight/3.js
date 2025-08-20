//promise知识点1：封装一个函数，返回一个promise
function light(color, time) {
    console.log(color)
    return new Promise(r => {
        setTimeout(r, time)
    })
}
//promise知识点2：then方法返回一个promise
function loop() {
    light('red', 3000)
        //控制流程 异步变同步
        .then(() => light('yellow', 500))
        //当返回值也是promise时，会等待这个promise执行完毕再执行下一个
        .then(() => light('green', 3000))
        .then(loop)//递归
}

loop()