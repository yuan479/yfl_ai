# 原型
- OOP 机制 Object Oriented Programming 面向对象
- 有封装，**继承**，多态，接口

## js OOP
- 对象字面量 如果有一堆一样的对象，创建麻烦
- 类的概念， 但是没有class 关键字， 只有函数
- 构造函数不能省的、
- 赋予函数新的使命，函数身兼两职  类+构造函数

## js 面向对象更强大，它是原型式的

- 任何对象 都默认指向Object
- __prototo__  任何对象都有这个私有属性，对象和构造函数之间没有什么血缘关系（就像代孕一样）


 - js本没有类 用function 大写来表示类
 - js 对象和类，构造函数 没有血缘关系
 __proto__ 指向构造函数的prototype 原型对象
 __proto__ 指向任何对象

 - 不指默认指向Object
 - 原型对象 原型链
 - 类是大写的函数
 - 实例new 出来的对象
- 任何函数都有一个prototype 属性，值就是构造函数的原型对象

## new 的过程
new -> {} -> constructor -> this -> {} -> 完成了构造 -> __proto_ -> constructor.prototype -> Object 原型链 -> null终点
