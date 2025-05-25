//数组对象
const arr = ['1', '2', '3'];
console.log(typeof arr);
const date = new Date();
console.log(typeof date);
//如何区分Object 这些类型？
//[object Date]
//[object Array]
console.log( typeof Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(date));

//会在MDN 文档看一些资料
function getType(value){
    //string 的选择
    //split + substring

return Object.prototype.toString.call(date).slice(8,-1)
}
//数组对象的类型

