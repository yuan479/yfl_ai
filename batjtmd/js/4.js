//全局作用域
function fn(){ //函数作用域
    let a=2;
    if(true){//支持块级作用域（高级语言的特性） var 不支持
        let b=3;
    }
    console.log(b)
}
fn();

//全局的js 代码在执行前有一个编译过程
//变量提升了
console.log(value,'------'); //undefined 没有定义  没有声明  没有赋值  没有初始化
var value;
var a;
a=1;
/* if (false){ //块级作用域 
    var value = 1;// 声明变量
} */

//ReferenceError: value is not defined
//undifined 有 全局找不到
console.log(value);