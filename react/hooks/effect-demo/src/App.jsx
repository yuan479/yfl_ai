import { useState, useEffect } from 'react'

import './App.css'

function App() {
  //正作用：渲染组件
  //useEffect 在渲染完组件后会搞点副作用，发生在组件渲染之后

  const [count, setCount] = useState(0)
  const [num, setNumber] = useState(0)
  const [repos,seRepos] = useState([
    
  ])
 /*  console.log('1.组件函数开始执行')
  //生命周期函数
  //可以有多个副作用
  // 生命周期函数，挂载后mounted
  useEffect(() => {

    console.log('2.组件渲染完了')
  })

  //生命周期的更新 在两个时刻运行，1.组件渲染完，2.组件更新之后
  useEffect(() => {  //它的第二个参数是依赖项数组，可以更新组件更新之后
    console.log('3.count更新了 ')
  }, [count])
 

  useEffect(() => {  //它的第二个参数是依赖项数组，可以更新组件更新之后
    console.log('4.num更新了')
  }, [num, count])
 */

  useEffect(() => {  //它的第二个参数是依赖项数组，可以更新组件更新之后
   //apai 数据 动态的
    console.log('5.只在组件挂载中运行一次')
    const fetchRepos = async () => {
      const response =await fetch('http://api.github.com/users/yunan479/repos')
      const data = await response.json()
      console.log(data)
      setRepos(data)//更新状态
    }
    fetchRepos()
  }, [])

/* 
  //在这里有组件的模板编译 它是jsx
  //编译完成后变成Dom挂载到#root上
  console.log('6.组件的模板编译') 
 */

  return (
    <>
      {count}
      <button onClick={() => {
        setCount(count + 1)
      }}>点我 + 1</button>  {/* 点击后页面会重新更新 */}
      <br />

      {num}
      <button onClick={() => {
        setNumber(num + 1)
      }}>点我 + 1</button>{/* 点这个也重新执行函数，但是不打印ahhhh~ */}
   
      <ul id="repos">
        {
          repos.map(repo=>
            `<li>${repo.full_name}</li>`
          )
        }
      </ul>
    </>
  )
}

export default App
