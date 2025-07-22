import { useState } from 'react'
import './App.css'
//import 的加载顺序决定了样式的覆盖顺序，因为它出来加载还会运行
import Button from './components/Button'
import AnotherButton from './components/AnotherButton'

function App() {


  return (
    <>
     <Button></Button>
     <AnotherButton></AnotherButton>
    </>
  )
}

export default App
