import { useState } from 'react'
import './App.css'
import { TodoContext } from './TodoContext'
import { useTodos } from './hooks/useTodo'  
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
const todosHook = useTodos()  

  return (
   
    //App 状态管理
    <TodoContext.Provider value={todosHook}>
     <h1>Todo App</h1>
     <AddTodo></AddTodo>
     <TodoList></TodoList>
    </TodoContext.Provider>
  )
}

export default App
