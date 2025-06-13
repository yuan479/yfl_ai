//add函数,3个参数
//add.length 3
function add(a, b, c) {
    return a + b + c;
}
add(1, 2, 3)
// 柯里化（curry）：将多参数函数转换为嵌套单参数函数链的技术。通过闭包实现参数暂存,不要一次性传入所有参数，而是逐步传入。
function curry(fn) {
    // 返回一个函数，因为只有这样，addCurry(1)才会返回一个函数，才会继续调用addCurry(2)
    /*   return function(item){
          // 最后运行的是fn(args)
          console.log(item) //fn.length 是fn函数的参数个数
      } */
    /*    let judge=(arg)=>{
           if(arg.length===fn.length)return fn(arg)
           return (ag)=>judge(arg,ag)
       }
       return judge */
    //fn? 参数 最终要执行的功能，闭包中的自由变量
    // curry 函数 包装fn，慢慢收集参数
    let judge = (...args) => {//...args 是一个数组，里面包含了所有的参数，
        // 收集参数，当参数的个数达到fn.length的时候，执行fn
        //es6 reset 运算符
        //任何地方都可以访问到定义时候的fn 
        if (args.length === fn.length) { // 收集到了所有的参数，退出递归
            return fn(...args)
        }
        return (...newArgs)=>judge(...args,...newArgs)
    }
    return judge
}





let addCurry = curry(add)  //逐步获取函数需要的参数，当当达到需要的参数个数时，执行结果

console.log(addCurry(1)(2)(3))//要使用递归