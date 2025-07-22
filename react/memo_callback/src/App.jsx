import { useState, useEffect,useCallback,useMemo} from 'react'
//useMemo 可以缓存一个复杂计算的值
import './App.css'
import Button from './Button'

function App() {

  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  console.log('APP--------------------------')

  //复杂计算，开销高
  const expensiveCopumentation =(n)=>{
    console.log('expensiveCopumentation')
    for (let i = 0; i < 1000000000; i++) {
      i++
    }
    return n * 2
  }

  const result = useMemo(() => 
    expensiveCopumentation(num),[num]
   )

  useEffect(() => {
    console.log('count', count)
  }, [count])

 

  useEffect(() => {
    console.log('num', num)
  })
//rerender 重新生成
//能不能不要生成，和useEffect []一样
//callback 回调函数 缓存函数
  const handleClick = useCallback(() => {
    console.log('handleClick')
  },[num])

  return (
    <>
      {/* <div>{expensiveCopumentation(num)}</div> */}
      <div>{result}</div>
      <div>{count}</div><br />
      <button onClick={() => setCount(count + 1)}> count+1 </button><br />
      {/* <Button num={num}></Button><br /> */}
      <button onClick={() => setNum(num + 1)}>num+1</button><br />
      <Button num={num} onClick={handleClick}>Click</Button><br />
    </>
  )
}

export default App
