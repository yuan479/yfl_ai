import React from 'react'

interface Props{
    userName:string;
    //typescript 除了内置的类型外，还有自定义类型 如：class interface
    //React 提供的类型 事件类型ChangeEvent
    // type="radio" type="checkbox" 也能用Change事件
    //HTMLInputElement    event.target.value?
    //对重要的地方进行约束 如函数的返回值，参数的类型 这样不容易出错
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void; //函数声明
}

const NameEditComponent:React.FC<Props>=(props)=>{
   return(
    <>
    <label > Update name:</label>
    <input value={props.userName} onChange={props.onChange} />
    </>
   )
}

export default NameEditComponent