const obj ={a:1,b:2}
//太常用 大型语言都内置的，[] {}
//HashMap 字典 0（1) ket:value
const target =new Map()//实例化的es4 新的数据结构
target.set('c',3)
console.log(target.get('c'))
target.set(obj,4)//和JSON不一样的地方，对象做key
console.log(target.get(obj))

let obj2 ={name:'释永信'}
const target2 = new WeakMap()//weakmap 弱引用  垃圾回收机制
target2.set(obj2,'code秘密花园')
obj2 = null //内存垃圾的回收
console.log(target2.get(obj2))//undefined