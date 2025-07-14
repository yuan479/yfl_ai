import { useState, lazy, Suspense, } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
//不能下面这样引入，这样引入一定会执行
// import Home from './pages/Home'
// import About from './pages/About' 

// 假如有30多个页面，用懒加载
const Home = lazy(() => import('./pages/Home'))  //函数 路由 ->Router 返回一个新的组件
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {



  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={
          <div>正在加载中...</div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
