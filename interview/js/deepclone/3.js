const target = { 
    a: 1 
}
const source = {
    b: {
        name:'蔡徐坤',
        hobbies:['唱','跳','rap'],
    },
    c:1
}

Object.assign(target,source)
console.log(target)//{a:1,b:{name:'蔡徐坤',hobbies:['唱','跳','rap']}}

target.b.name='小黑子'
target.b.hobbies.push='篮球'

target.c=2

console.log(source.b.name,source.b.hobbies) //{name:'小黑子',hobbies:['唱','跳','rap','篮球']}

console.log(source.c) //1
