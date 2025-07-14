import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,  //前端路由二选一
  Routes,
  Route,
  Link, //它要实现SPA 要用Link 代替a标签
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {


  return (
    <>
      <Router>
      <nav>
        <ul>
         {/*   <li><a href="/">Home</a></li>
           <li><a href="/about">About</a></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
     </nav>
     <h1>Page1</h1>
     <p>这是第一个页面的内容</p>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
