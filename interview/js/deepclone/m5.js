let arr1 = [{
    name: '张三',
    hobbites: ['吃饭'],
},
function(){
    console.log('函数拷贝不了')
}]

let arr2 = JSON.parse(JSON.stringify(arr1))//深拷贝，只能拷贝一层，不能拷贝多层
arr2[0].name = '张三(深拷贝)'
arr2[0].hobbites.push('睡觉')

console.log(arr1)//[{name: "张三", hobbites: Array(1)}]
console.log(arr2)//[{name: "张三(深拷贝)", hobbites: Array(2)}]

