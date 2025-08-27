interface Animal{
    name:string
}

interface Animal{
    age:number
}

const dragon:Animal = {
    name:'奶龙',
    age:2
}

type AnimalType = {name:string} 
//type AnimalType = {age:number}  //不能重复声明，会报错