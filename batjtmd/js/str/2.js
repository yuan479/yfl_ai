//
"hello".length //写法
lan("hello") //函数式写法，没有length属性
//背后魔法
//js面向对象的统一写法
//数组对象
['h','e','l','l','o'].reverse()

// 会自动将“hello” -> new String("hello")

/* "hello"==new String("hello")
true
"hello"===new String("hello")
false */
//两个==是比较值相等，===是比较值和类型都相等