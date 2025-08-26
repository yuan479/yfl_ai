let arr1 = [3, 1, 4]//修改原数组
console.log(arr1.sort(), arr1)//[1,3,4]

let arr2 = [3, 1, 4]//不修改原数组
//a-b>=0 升序
console.log(arr2.sort((a, b) => a - b), arr2)//[1,3,4]
//a-b<0 降序
console.log(arr2.sort((a, b) => b - a), arr2)//[4,3,1]
//默认字典排序，按字符串排序
console.log([20, 1, 10, 3, 2].sort())//[1,10,2,20,3]

//reverse 修改原数组
let arr3 = [2, 4, 3, 1, 5]
console.log(arr3.reverse(), arr3)//[5,1,3,4,2]

//fill 修改原数组 es6的方法
//fill(value, start, end)
let arr4 = [5, 1, 4, 2, 3]
console.log(arr4.fill(9, 1, 3), arr4)//[5,9,9,2,3]







