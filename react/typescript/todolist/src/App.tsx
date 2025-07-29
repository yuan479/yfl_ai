import { } from 'react'
import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
//react + typescript
// 大型项目里面，javascript 可能会有一些问题，主要是因为它是弱类型
//jsx的后缀改成 tsx

function App() {
  //编译阶段
  //tsx 多了个类型声明
  //多写一些代码来声明类型，可以保障代码质量
  let count: number = 10
  //count ="20"  ❎
  const title: string = "hello world💖"
  //const list:number[]=[1,'2',3] -->
  const list: number[] = [1, 2, 3]
  //元祖类型
  const tuple: [string, number] = ["老六", 20]
  const tuple1: [string, number, boolean] = ["老六", 20, true]

  //枚举类型
  enum Status { Pending, Fullfilled, Rejected }
  const pStatus: Status = Status.Pending

  //对象类型
  //接口
  interface User{
    name:string;
    age:number;
    isSingle?:boolean //加问号变成可传可不传

  }
  //使用接口来约定类型
  const user: User={
    name:"张三",
    age:19,
    //isSingle:true,
  }

  //如何对函数进行类型约束
  const HelloComponents=()=>{  //void 为空 ReactNode
   /*  return(
      <div>你好</div>
    ) */
 
  }



  return (
    <>

      <div> {count}</div>
      <div> {title}</div>
      <div> {list}</div>
      <div>{tuple}</div>
      <div>{tuple1}</div>
      <div>{pStatus}</div>
      <div>{user.name}</div>
    {/*   <HelloComponent />  类型 "{}" 中缺少属性 "name"，但类型 "Props" 中需要该属性。 * */}

       <HelloComponent name="好久不见🎶"/> 
      {/* 不能将类型“{ name: string; }”分配给类型“IntrinsicAttributes”。
  类型“IntrinsicAttributes”上不存在属性“name”。 */}

    </>
  )
}

export default App
