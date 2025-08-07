import { useState,useEffect } from 'react'
import './App.css'

function App() {
useEffect(()=>{
 /*  (async()=>{
    //前后端联调
    const res = await fetch('http://localhost:8080/api/hello')
    const data = await res.json()
    console.log(data)
  })() */


},[])

  return (
    <>
    <h1>哇吼~ 我是奶龙</h1>
    <img src="https://p2.ssl.qhimgs1.com/sdr/400__/t04d93971c98a772162.jpg"/>
    </>
  )
}

export default App
