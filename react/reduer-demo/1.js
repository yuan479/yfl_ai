//纯函数 ： 相同的输入，一定会有一样的输出
// 而且没有副作用：即不操作变量，不发请求，也不修改DOM
// 在管理数据状态时，我们就用纯函数去管，让全局状态更正确
//全局状态很重要，因为一堆地方要用它
// 所有用到的地方，我们要修改这个值，但也要遵守修改方法，于是有了流程

/* function add(a, b) {
    return a + b;
}    */

//不单纯了
/* function add(a, b, obj) {
    obj.item = 100;
    return a + b;
}    */

//不纯的？ 案例：
let total =0
function addToTotal(a){
    total += a
    return total
}
// 不纯原因：1.它修改了函数外面的值 2.二义性：‘其他函数也能操作total
