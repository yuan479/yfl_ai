// 怎么用的 参数的默认值
// 默认值 用户传参 用Object.assign() 合并对象


//应用场景1：合并用户传参和默认参数
function createUser(options) {//创建一个用户实例，Option 是会传入的对象
    const defaults = {
        name: '匿名对象',
        age: 18,
        isAdmin: false
    }
    //目标对象是空对象，源对象是默认值和用户传参
    const config = Object.assign({}, defaults, options)
    console.log(config)//{name: "张三", age: 18, isAdmin: false}
}

createUser({ name: '张三', age: 20 })


//应用场景2：合并环境变量和配置对象
const baseConfig = { api: '/api', timeout: 500 }
const envConfig = { timeout: 1000, debug: true }
const finalConfig = Object.assign(
    {},
    baseConfig,
    envConfig
)
