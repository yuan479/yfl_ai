// 包装类
let a = "abc"
let b= new String("abc")
console.log(a==b) //true 值相等
//js 给所有简单数据类型提供了相应类型的类---包装类
console.log(a===b) //false 类型不同
console.log(b.split(''))
//为了统一面向对象写法
//js 会自动将简单数据类型包装成对象
//a -> new String(a)
console.log(a.split(''))
//之后会销毁对象，回归原来的简单类型