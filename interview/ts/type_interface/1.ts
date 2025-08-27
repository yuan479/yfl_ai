// ts是 js的超集，js是弱类型，容易出问题
// ts带来类型的约束
// 当初的 ts是微软开发的，想让 java工程师写前端
// react + ts 是开发的标配
// 自定义类型
//interface 关键字
interface UserDemo{
    name:string //用分号或不写，不用逗号
    age:number
}

//相同点，可以声明自定义类型
type UserType = {
    name:string
    age:number
}

const u1:UserDemo = {name:'路明非',age:19}
const u2:UserType = {name:'楚子航',age:20}