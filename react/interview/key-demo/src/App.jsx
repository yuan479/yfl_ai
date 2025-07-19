import { useState, useEffect } from 'react'
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
    {
      id: 3,
      title: '标题3',
    },
  ])
  useEffect(() => {
    setTimeout(() => {
      /*  setTodos(prev=>prev.map(todo=>{
         if(todo.id===1) return{
           ...todo,
           title:'标题壹'
         }
         return todo
       })) */
      /*       setTodos(prev=>[
        ...prev,
        {
          id:4,
          title:'标题4',
        }
      ]) */
      setTodos(prev => [
        // ...prev,
         {
          id: 4,
          title: '标题4',
        }, 
        ...prev
      ])
    }, 2000)


  }, [])

  return (
    <>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
