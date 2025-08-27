// 运行在 node环境中，顶级对象
//global.gc() //手动触发垃圾回收
//console.log(process.memoryUsage())

let map = new Map()
let key = new Array(10000000)

//console.log(process.memoryUsage())

map.set(key,1)
//console.log(process.memoryUsage())

key = null // 手动释放引用
console.log(process.memoryUsage())//但是内存没有释放，因为map强引用
map = null
global.gc()//手动触发垃圾回收
console.log(process.memoryUsage())//内存释放







