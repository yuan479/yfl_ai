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

//常用的深拷贝
const  newObj=JSON.parse(JSON.stringify(source))
//先序列号，然后解析成一个新的对象
console.log(newObj) //{b:{name:'蔡徐坤',hobbies:['唱','跳','rap']},c:1}

newObj.b.name='小黑子'
newObj.b.hobbies.push='篮球'

console.log(source) //{b:{name:'蔡徐坤',hobbies:['唱','跳','rap']},c:1}
console.log(newObj) //{b:{name:'小黑子',hobbies:['唱','跳','rap','篮球']},c:1}