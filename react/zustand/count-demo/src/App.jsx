import { useState } from 'react'
import './App.css'
import Counter from "./components/Counter"
import TodosList from "./components/TodoList"
import RepoList from "./components/RepoList"
import { useCounterStore } from './store/count'

function App() {
 
  const {count} = useCounterStore()

  return (
    <>
    <h2>App中的{count}</h2>
    <Counter />
    <TodosList/>
    <RepoList/>
    </>
  )
}

export default App
