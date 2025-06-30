/* function bar() {
    console.log(myName);
}
function foo() {
    var myName = "极客邦";
    bar();
}
var myName = "极客时间"
foo();//极客时间 */
/* let a = "我是变量1"
function foo() {
    let b = "我是变量2";
    console.log(b); 
}

foo();  // 我是变量2
console.log(a); //  输出 "我是变量1"
console.log(b);  //  报错：ReferenceError（无法访问函数作用域变量） */
/* let a = "我是全局变量a"
function outer() {
    let b = "我是out里的变量b";
    inner();
   function inner(){
        let c = "我是inner里的变量c";
        console.log(a);//我是全局变量a
        console.log(i);//报错：ReferenceError（无法访问函数作用域变量）
    }
}
outer();
//作用域链为：inner -> outer -> global */



/* let globalVar = "我是全局变量"; 

function funcA() {
    console.log("我是全局函数 funA");
}

function funcB() {
    console.log(globalVar); 
    funcA();
}

funcB();//我是全局变量  我是全局函数 funA */

/* function outer() {
    var a = "我是outer函数作用域变量 a";

    function inner() {
        var b = "我是inner函数作用域变量 b";
        console.log(a);  // 输出 "我是outer函数作用域变量 a"
    }

    inner(); // 调用内部函数 inner()

    //console.log(b); //报错：ReferenceError: b is not defined（外部无法访问内部变量）
}

outer(); 
//console.log(a); // 报错：ReferenceError: a is not defined（函数作用域变量外部不可见） */

/* function foo(){
    console.log(funcVar); // 输出: undefined（函数作用域变量外部不可见）
    if (true) {
        console.log(blockVar); // 报错：ReferenceError（TDZ）
       

        let blockVar = "我是块级作用域变量";
        const blockConst = "我是块级常量";  
        var funcVar = "我是函数作用域变量"; 

        console.log(blockVar); // 输出: 我是块级作用域变量
    }
console.log(funcVar); //  输出: 我是函数作用域变量
console.log(blockVar); // 报错：ReferenceError（块级作用域变量外部不可见）
}

//console.log(blockVar); //  报错：ReferenceError（块级作用域变量外部不可见）
foo(); */

function outer() {
    var outerVar = "我是外部函数变量"; 
    function inner() {
        console.log(outerVar); // 输出 "我是外部函数变量"
    }
    inner(); // 调用内部函数 inner()
}
outer(); // 输出 "我是外部函数变量"