/* 
* @func 反转字符串
* @param {*} str
* return string
*/
function reverseString1(str) {
    //str 是什么类型？ 字符串 简单数据类型 primitive(简单数据类型)
    return str.split('').reverse().join('')
}

//再优化一下？
//函数表达式
//es5 函数表达式
const reverseString2 = function (str) {
    return str.split('').reverse().join('')
}
//es6 箭头函数  简洁  
// function 不要了 用的箭头代替 左边是参数部分，右边是代码部分
//花括号也省了 只有一句话的时候可以省
//而且它是返回值的时候，连return 也可以省略

//const reverseString3 = (str) => str.split('').reverse().join('')
//当只有一个参数的时候，小括号可以省略
const reverseString3 = str => str.split('').reverse().join('')
console.log(reverseString3("hello"));

