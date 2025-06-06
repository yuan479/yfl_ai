['1', '2', '3'].map((num,index,arr)=>{
    console.log(num,index,arr)
})

//parseInt() 第二个参数是进制
//第一次
//parseInt('1',0,['1','2','3'])  //1
//第二次
//parseInt('2',1,['1','2','3'])  //NaN
//第三次
//parseInt('3',2,['1','2','3'])  //NaN