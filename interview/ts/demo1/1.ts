/* 
const a: any = 1//any 任意类型，ts 新手常用
//a='1'//不能滥用
//初级ts，用any带来复用性
function getFirstElement(arr: any[]): any {
    return arr[0]
}
//我们想提高函数的复用性，但是传入的参数类型不一致
const numbers =[1,2,3]
const firstNum = getFirstElement(numbers)

const strs = ['a','b','c']
const firstStr = getFirstElement(strs)
*/

//能不能复用这个函数的同时，传入类型参数

function getFirstElement<T>(arr:T[]):T|undefined {
    return arr.length>0?arr[0]:undefined
}
const strings = ['hello','world']
const firstStr = getFirstElement(strings)//ts的类型推导

/* 
const numbers = [1,2,3]
const firstNum = getFirstElement<number>(numbers)
firstNum?.toFixed(2) */
