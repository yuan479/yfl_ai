const target ={
    a:1,
    b:2
}
const source={
    b:3,
    c:4
}
Object.assign(target,source)//后面的会覆盖前面的
console.log(target)//{a:1,b:3,c:4}