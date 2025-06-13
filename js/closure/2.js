//内部对象
function add(a, b, c) {
    //arguments 是一个类数组对象，包含了函数的所有参数,在函数运行时才决定
    // 下标访问第几个参数，是一个数组
    //cosnt.log(arguments,arguments.length,Objiect.prototype,toString,alll)
    //类数组，有length属性，for 但是没有数组太多的方法

    //console.log(arguments.map(item=>item + 1))
    //如何将类数组转成真正的数组？
    const args = Array.from(arguments)
    console.log(Object.prototype.toString.call(args))

    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        result += arguments[i]
    }
    return result
}
