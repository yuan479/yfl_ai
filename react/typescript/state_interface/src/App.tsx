import { useState } from 'react'
import './App.css'
import  NameEditComponent  from './components/NameEditComponent.tsx'

function App() {
//如何给状态里面加约束？
 // const [name, setName] = useState('initialName')

 //typescript 代码
 const [age, setAge] = useState<number>(1)
 const [name, setName] = useState<string>('initialName')

 //单向数据流场景
 //const setUsernameState=(event)=>{ //参数“event”隐式具有“any”类型。
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value)
 }

  return (
    <>
    <NameEditComponent userName={name} onChange={setUsernameState}/>
    </>
  )
}

export default App
