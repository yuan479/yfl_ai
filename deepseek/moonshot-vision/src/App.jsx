import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_API_KEY)
  // react 内置的hook （钩子）函数，能快速解决一些问题，这里帮我们生成一个响应式数据状态
  // hook还有 useRef(DOM对象的绑定)  useEffect（副作用）
  const [content, setContent] = useState('')
  const [imgBase64Data, setImgBase64Data] = useState('')
  const [isValid, setIsValid] = useState(false)
  // base64 Google推出来的编码方案
  const updateBase64Data = (e) => {
    //拿到图片 e html5特性 让我们使用js和操作系统本地文件交互
    const file = e.target.files[0]
    console.log(file)
    if (!file) return;
    //html5 读的方式读取文件
    const reader = new FileReader()
    reader.readAsDataURL(file) //读取文件的内容
    //异步操作
    reader.onload = () => {
      //console.log(reader.result)
      setImgBase64Data(reader.result)//把结果保存到状态中
      setIsValid(true)
    }
  }
  const update = async () => {// 异步变成同步
    if (!imgBase64Data) return;
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`//授权码 Bearer 声明后面是token
    }
    // 实时反馈给用户
    setContent('正在加载中...')
    const response = await fetch(endpoint, {
      method: 'POST',
      headers, //es6 中 json key value 一样可以省略
      body: JSON.stringify({
        model: 'moonshot-v1-8k-vision-preview',
        messages: [
          {
            role: 'user', //种类有三种：user 系统 助手
            content: [
              {
                type: 'image_url',//图片类型
                image_url: {
                  "url": imgBase64Data
                }
              },
              {
                type: 'text',
                text: '请用中文描述图片'//对ai提问
              }
            ]
          }
        ],
      })
    })
    // 二进制字节流 json 也是异步的
    const data = await response.json()//拿到数据
    setContent(data.choices[0].message.content)
  }
  return (
    <div className="container">
      <div className="output">
        <div className="preview">
          {
            imgBase64Data && <img src={imgBase64Data} alt="" />
          }
        </div>
      </div>
      <div>
        <label htmlFor='fileInput'>文件：</label>
        <input
          type="file"
          id='fileInput'
          className='input'
          accept='.jpg,.png,.gif,.jpeg'
          onChange={updateBase64Data}
        />
        <button onClick={update} disabled={!isValid}>提交</button>
      </div>

      {content}
    </div>

  )
}

export default App
