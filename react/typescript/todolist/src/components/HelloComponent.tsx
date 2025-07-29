import React from 'react'

//如何约束函数的返回值为ReactNode? JSX
//FC ==FunctionComponent

/* const HelloComponent:React.FC = ()=>{

   // return undefined
   return (
    <h2>你好呀🎶</h2>
   )

} */


//typescript 类型约束：设置关卡，在重要的地方一定要约束
//比如函数的参数和返回值，
interface Props {
   name: string
}

//泛型 ：泛指内部的类型
// 加一个<Props>,否则 "类型“{}”上不存在属性“name”"
const HelloComponent: React.FC<Props> = (props) => {
   // const {name} = props
   // return undefined
   return (
      /* 如何约定需要一个name的props */
      //<h2>你好呀, user:{peops.name}</h2>

      <h2>你好呀, {props.name}</h2>
   )

}

export default HelloComponent