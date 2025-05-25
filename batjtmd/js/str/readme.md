# 腾讯字符串考题
 -访问官方文档“https://developer.mozilla.org/zh-CN/”

灵活性
- 将 hello 反向输出
  - js reverse
  - 字符串和数组上的方法

   function reverseString(str) {
     return str.split('').reverse().join('')
   }
   split():将字符串分割成数组
   reverse():数组反转
   join():数组拼接成字符串

- 为什么简单数据类型“hello”后面能使用split()方法？
    "hello".length   写法
    lan("hello")   函数式写法，没有length属性
    背后魔法  js面向对象的统一写法
    数组对象
    ['h','e','l','l','o'].reverse()
    会自动将“hello” 转化为 new String("hello")

    "hello"==new String("hello")    true
    "hello"===new String("hello")    false 
    两个==是比较值相等，===是比较值和类型都相等

- 包装类
 将简单数据类型包装一下，变成对象，实现统一的面向对象写法
 之后立即销毁
 其他语言一样 函数式编程和面向对象编程
 js 统一 很好学
 