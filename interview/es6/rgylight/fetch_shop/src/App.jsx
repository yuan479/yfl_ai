import { } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  let controller = new AbortController()//

  useEffect(() => {
    fetch('http://localhost:5173/api/banners', {
      signal:controller.signal
      //signal: AbortSignal.timeout(3000)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [])
  const stop=(()=>{
    controller.abort()
  })
  return (
    <>
<button onClick={stop}>停止发射</button>
    </>
  )
}

export default App
