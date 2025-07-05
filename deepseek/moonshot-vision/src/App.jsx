import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_API_KEY)
  // react 内置的hook （钩子）函数，能快速解决一些问题，这里帮我们生成一个响应式数据状态
  // hook还有 useRef(DOM对象的绑定)  useEffect（副作用）
  const [content, setContent] = useState('')
  const updateBase64Data = (e) => {
    //拿到图片 e
    const file = e.target.files[0]
  }
  const update = () => {
    
  }
  return (
   <div className="container">
      <div>
        <label htmlFor='fileInput'>文件：</label>
        <input 
        type="file"
        id='fileInput'
        className='input'
        accept='.jpg,.png,.gif,.jpeg'
        onChange={updateBase64Data}
        />
        <button onClick={update}>提交</button>
      </div>
      <div className="output">
        <div className="preview">

        </div>
      </div>
      {content}
   </div> 
   
  )
}

export default App
