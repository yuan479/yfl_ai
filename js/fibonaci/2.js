function memorizeFib(){
    //闭包 1.函数嵌套函数
    // 自由变量
    const cache = {}
    return function fib(n){
       if(n <= 1)
        return n;
       
       if(cache[n])
        return cache[n];
        cache[n] = fib(n - 1) + fib(n - 2);
       return cache[n];
    }
}
//可以在外部访问
const fib = memorizeFib()
console.log(fib(10))