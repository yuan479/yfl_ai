//没有class 的js 如何实现面向对象编程

//函数就是类，构造函数
// 首字母大写 约定俗成 
// 1.类的概念  2.构造


function Person(name, age) {
    // this 指向实例化的对象
    this.name = name;
    this.age = age;

}
//函数对象   原型对象
// 用原型对象解决类的方法
Person.prototype = {
sayHello:function(){
    console.log(`hello ${this.name}`);
}
}
// 函数new 一下 ，实例化对象
//new 运行构造函数
let ikun = new Person('坤坤', 18);
ikun.sayHello();//hello 坤坤

console.log(ikun.__proto__)//z指向原型对象
let o ={a:1};
console.log(o.__proto__)//z指向原型对象
console.log(o.toString())//[object Object]
console.log(new Person('人', 18))//Person {}
