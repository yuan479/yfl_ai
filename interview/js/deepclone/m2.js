const s = Symbol('id')//symbol: 独一无二的属性
const source = {
    [s]: 123,
    a: 1,
}
const target = []
Object.assign(target, source)
console.log(target)//[1, {Symbol(id): 123}]