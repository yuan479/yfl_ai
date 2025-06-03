//枚举类型 
//枚举类型是一种数据类型，允许定义一组命名常量，便于表示离散的值，提高代码可读性和可维护性
const status = {
    //不可修改 相当于常量
    ready:Symbol('ready'),
    running:Symbol('running'),
    done:Symbol('done'),
}
let state = status.ready