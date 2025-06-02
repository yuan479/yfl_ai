
/**
*@ func 两数之和
*@ param {number} a
*@ param {number} b
*@ return {number}
**/
// 函数编写者
//函数调用
//健壮性
//typeof 运算符
//判断简单数据类型，除了null
//返回值是类型的字符串
function add(a, b) {
    //参数的校验
    if (typeof a !== 'number' || typeof b !== 'number'|| isNaN(a) || isNaN(b)) {
     return "请输入数字"
    }
    else return a + b;
  }

console.log(add("1","2"))
console.log(add(1,2))
console.log(add(1,NaN))// 无效的数字
/* 
//NaN 是一个特殊的数字，它不等于任何值，包括它自己。
// NaN 是 JavaScript 中的一个特殊数值，表示“非数字”（Not a Number），通常在数学运算无法得到有效数字结果时返回。
console.log(0/0) // NaN
console.log(Math.sqrt(-1)) // NaN
console.log(typeof NaN) // number
console.log(parseInt("123a"),parseInt("a123"))// parseInt() 函数用于解析字符串并返回整数。 如果字符串的第一个字符不能被转换为数字，则返回 NaN。
console.log(Number(undefined)) // NaN
console.log(NaN === NaN) // false Not a Number 的方式有很多种
console.log(isNaN(NaN)) // true
 */