// 语法糖
async function foo(){
    const a = await bar() // 暂停执行，等待右侧的 Promise 解决后继续
    return a +1 
}

function foo(){
    return new Promise((resolve,reject)=>{
        bar().then(a=>{
            resolve(a+1)
        }).catch(reject)
    })
}
//本质就是语法糖，只是写法更优雅，更同步