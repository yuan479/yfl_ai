function CreateCounter(num) {
    // 共有变量  public
    // 它有对外的接口，也有对内的私有
    this.num = num
    // 私有变量  private  不够私有？
    let count = 0; //局部变量，外界无法访问，除非是闭包

    return {// 封装了一个对象，返回给外界
        num: num, // 公共属性，外界可以访问
        increment: () => {
            count++; //从局部变量变成了私有属性
        },
        dicrement: () => {
            count--; //闭包里面的自由变量
        },
        getCount: () => {
            console.log("count 被访问了！！！");
            return count; // 获取count ,通过getCount方法获取count，count是私有的，外界无法访问，只能通过getCount方法获取count
        }
    }
    //闭包： 使函数的变量被外界访问，函数嵌套函数的一种方法
}

/* let obj = new CreateCounter(1)
console.log(obj.num) */

const counter = CreateCounter(1)
console.log(counter.num) // 1
//console.log(counter.count) //undefined   私有变量无法访问

// 闭包延长了变量的生命周期
// 不直接操作count   而是操作increment间接操作
counter.increment()
console.log(counter.getCount()) // 1 