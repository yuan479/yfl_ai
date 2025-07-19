import { useState, useRef } from 'react'
import './App.css'

function ControlledInput({ onSubmit }) {
  const [value, setValue] = useState('') //响应式的状态
  const [error, setError] = useState(null) //错误信息
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value, "提交")
    onSubmit(value)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
    //频繁触发 用于实时判断表单是否合格
    if (e.target.value.length <6) {
      setError('输入的内容不能小于6个字符')
    }
    else {
      setError('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="controlled-input">受控组件</label>
      <input

        type="text"
        value={value}
        //onChange={(e) => setValue(e.target.value)}
        onChange={handleChange}
        required

      />
      <input type="submit" value="提交" />
      {error && <p style={{'color':'red'}}>{error}</p>}
    </form>
  )
}

function UncontrolledInput({ onSubmit }) {
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    console.log(value, "提交1")
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-input">非受控组件</label>
      <input
        type="text"
        ref={inputRef}
      />
      <input type="submit" value="提交" />
    </form>
  )
}

function App() {
  const handleSubmit = (value) => {

    console.log(value, "提交2")
  }

  return (
    <>
      <ControlledInput onSubmit={handleSubmit} />
      <UncontrolledInput onSubmit={handleSubmit} />
    </>


  )
}

export default App
