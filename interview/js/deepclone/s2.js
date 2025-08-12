const target = {
    a: 1
}

//如果源对象是简单数据类型，忽略
Object.assign(target, null)
Object.assign(target,undefined)

console.log(target)//{a:1}

Object.assign(undefined, {b: 2})//报错，undefined不能作为目标对象，因为undefined不是对象

const obj ={name:'张三'}
Object.assign(obj)//{name:'张三'}
// //如果没有源对象，返回原对象，不会报错