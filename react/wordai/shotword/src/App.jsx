import { useState } from 'react'
import PictureCard from './components/PictureCard'
import './App.css'

function App() {


  return (
    //在react中，这不是html,而是jsx，jsx是js的扩展，jsx是一种语法，它允许我们在js中编写html
   <div className="container">
    {/* 自定义组件，子组件 */}
    {/* 组件，html,css,js,把这些组合起来，实现图片上传功能，模块化，可复用 */}
    {/* 页面由DOM树 变成 组件树 */}

    <PictureCard />


   </div>
  )
}

export default App
