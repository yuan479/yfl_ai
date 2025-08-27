interface Person {
    name: string
}
// 继承，接口可以继承接口
interface Employee extends Person {
    job: string
}
// 类型声明
type PersonType = { name: string }
type EmployeeType = PersonType & { job: string }