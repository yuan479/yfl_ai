interface AddFn{
    (a:number,b:number):number //约定函数的参数和返回值
}

type AddType = (a:number,b:number) => number 

// 类型别名
type NumberOther = number //将number类型别名为NumberOther

let a:NumberOther = 123 