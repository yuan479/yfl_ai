// 独一无二的值
const sym = Symbol();
const sym1 = Symbol();
const sym2 = Symbol('desc');//label 标签
/* console.log(typeof sym , sym );// symbol Symbol()
console.log(sym === sym1); // false */
// symbol 可以作为对象的key
//使用Symbol 构造函数实例化 ， 一个标记为id 的唯一值ID
//ID 唯一性， sYmbol
const ID = Symbol('id');
const sex ='sex'
const age = Symbol('age')

//es6之前 key string
// symbol 作为key
const user = {
    name:'Alice',
    [ID]: 123,
    [sex]:'男',
    "age": 18,
    [age]: 20,
    //key 是独一无二的
    //如果我们需要修改别人代码中的对象
    //对象动态的 不希望出错
}
console.log(user.name,user[ID],sex);
console.log(user.age,user[age]);

for(let key in user){
    console.log(key,user[key],' <-')
}

//面向对象有一个私有属性概念？
// 对象的隐私，内部需要，不希望外界调用