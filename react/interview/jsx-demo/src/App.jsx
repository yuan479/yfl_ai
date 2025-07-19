import { useState, createElement } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '标题1',
    },
    {
      id: 2,
      title: '标题2',
    },
  ])
  const element = <h1 className='title'>世界，晚安💖</h1>
  const element2 = createElement('h2', { className: 'title', id: 'tit' }, '明天，早上好ヾ(≧▽≦*)o')
  return (
    <>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
        {
          todos.map(todo => (
            createElement('li', { key: todo.id }, todo.title)
          ))
        }
      </ul>
      {element}
      {element2}
    </>
  )
}

export default App
