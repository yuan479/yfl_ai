const arr1 = [1, 2, 3, 4, 5]
const removed = arr1.splice(2, 2)
console.log(removed)//[3,4]
console.log(arr1)//[1,2,5]

//如果要移除元素，但不改变原数组呢？
//splice 是修改原数组，所以不能用
//slice 不修改数组，截取部分元素，返回新数组
const arr2 = [1,2,3,4,5]
const newArr1 = arr2.slice(0,2)
const newArr2 = arr2.slice(0,2).concat(arr2.slice(2))
console.log(newArr1,arr2)//[1,2] [1,2,3,4,5]
console.log(newArr2,arr2)//[1,2,5] [1,2,3,4,5]




