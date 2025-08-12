//有两个容器，盒子A放有钥匙，钱包，盒子B放有手机，充电宝

const target = { a: 1 }
const source = { b: 2 }

//将source对象的属性复制到target对象中，返回合并后的对象
const result = Object.assign(target, source)
console.log(result) // { a: 1, b: 2 }
console.log(target) // { a: 1, b: 2 }
console.log(source) // { b: 2 }

result.a = 3
console.log(result)// { a: 3, b: 2 }
console.log(target) // { a: 3, b: 2 }
console.log(source) // { b: 2 }