function foo() {
    var myName = "极客时间"
    let test1 = 1
    const test2 = 2
    var innerBar = {
        getName: function () {
            console.log(test1)
            return myName
        },
        setName: function (newName) {
            myName = newName
        }
    }
    return innerBar
}
var bar = foo()// 闭包就是函数嵌套函数，外部访问的时候。
// 它可以沿着词法作用域链，找到它申明的时候的函数中的变量
//函数好像有一个背包意义，里面放着外层函数的变量。
bar.setName("极客邦")
//它会先到自己的作用域找，如果找不到，沿着outer去包着它的那个函数找。
bar.getName()
console.log(bar.getName())