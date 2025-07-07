import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {


  return (
    <>
    {/* 开发的任务单位就是组件 */}
    {/* <div style="windth:100px;height:100px;background:aqua;"></div> */}
    {/* <div style={{windth:'30vw',height:'30vw',background:'blue'}}></div> */}
   {/*  <div style={{fontSize:'12px',windth:'8.3333em',height:'8.3333em',background:'origin'}}></div>
    <div style={{fontSize:'14px',windth:'3.5714em',height:'3.5714em',background:'grey'}}></div> */}
   <Todos/>
    </>
  )
}

export default App
