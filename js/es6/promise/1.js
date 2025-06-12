//读取1.html里面的内容，读取完后打印“读完了”
const fs = require('fs')//引入js内部的fs模块


const readFilePromise =new Promise((resolve) => {
    fs.readFile('./1.html', (err, data) => {//读取1.html文件
        console.log(data.toString())//将读取到的内容转换成字符串
        resolve()//调用resolve函数
    })
    
})

readFilePromise
.then(()=>{
    console.log('111<--------------------')//打印“读完了”
})
