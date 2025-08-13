let obj1 = {
    name: '张三',
    age: 18,
}

let obj2 = obj1;//不是拷贝，而是引用传递,只是换一个名字，还是同一个东西
obj2.age = 20;

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

//怎么实现数组对象的拷贝？
//方法1：展开运算符
const arr = [1, 2, 3]
const newArr = [...arr]//浅拷贝，只能拷贝一层，不能拷贝多层

//方法2：slice()
let arr3 = arr.slice()
arr2[1]='b'
console.log(arr3)//[1, 2, 3]
console.log(arr3,arr)//[1, 'b', 3] [1, 'b', 3]

const arr4 = [[1, 2], [3, 4], [[5, 6], 7]];
let arr5 = arr4.slice()//浅拷贝，只能拷贝一层，不能拷贝多层
arr5[2][1][1]='8'
console.log(arr5,arr4)//[[1, 2], [3, 4], [[5, 6], '8']] [[1, 2], [3, 4], [[5, 6], '8']]

//方法3：concat()
let arr6 = arr4.concat()//浅拷贝，只能拷贝一层，不能拷贝多层
