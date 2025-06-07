import { useState } from 'react'
import './App.css'

//todes 列表需要渲染
//
/* function App() {
  // react 比 vue 更纯粹
  // 函数组件 App 组件 组合其他的组件完成应用
  //返回 html 的函数
  // html css js 用函数结合在一起 组件
  const todos = ['脱单', '摆烂', '国泰民安']
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>任务</th>
          </tr>
        </thead>
        <tbody>
          {
            // 动态的
            // react 一个括号 
            // js DOM 编程API 
            // 在html 里写 js 代码
            todos.map((item, index) => (

              <tr key={index}>
                <td>{index +1}</td>
                <td>{item}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>

    </>
  )
} */
function App() {
  //数据 --> 数据状态 数据业务 数据是会变的
  const [todos, setTodos] = useState(['脱单', '摆烂', '国泰民安'])
  const [title, kid] = useState(['孩子', '你做的很好。'])
  
  setTimeout(() => {
    setTodos(['脱单', '摆烂', '国泰民安', '不劳而获'])
    kid(['孩子', '你做的很好。', '这太有乐子了'])
  }, 3000)

  return (
    <div>
      <h1 className='title'>孩子,你做的很好。</h1>
      <table>
        <thead>
          <tr>
            <th>序列</th>
            <th>任务</th>
          </tr>
        </thead>
        <tbody>
          {//html 模板
            todos.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))
          }
          {
            title.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default App
