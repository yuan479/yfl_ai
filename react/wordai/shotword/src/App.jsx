import { useState } from 'react'
import PictureCard from './components/PictureCard'
//uploadImg 太长了 -> generateAudio 模块化 -> 复用 -> lib/audio.js
import{generateAudio} from './lib/audio.js'
import './App.css'

function App() {
  //父组件负责持有数据状态
    // se6 的字符串模板，支持多行

  const picPrompt = ` 
  分析图片内容,找出最能描述内容的一个英文单词,尽量选择更简单的A1~A2的词汇。
  返回JSON数据:
  {
    "image_discription":"图片描述",
    "representative_word":"图片代表的英文单词",
    "example_sentence":"结合英文单词和图片描述，给出一个简单的例句",
    "explaination":"结合图片解释英文单词,段落以Look at...开头，将段落根据每一句单独一行，解释的最后，给一个日常生活有关的问句。",
    "explaination_replys":["根据explaination给出的回复1","根据explaination给出的回复2"]
  }
  `
const [word,setWord] = useState("请上传图片");
const [sentence,setSentence] = useState("");
const [explainations,setExplainations]=useState([]);
const[audio,setAudio] = useState("")
const uploadImage =async (imgData)=>{
  console.log(imgData,'来自父组件的打印')
  setWord("正在分析中...")
  const endpoint = "https://api.moonshot.cn/v1/chat/completions"
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_KIMI_API_KEY }`,
    "Content-Type": "application/json"
  }

  const response = await fetch(endpoint,{
    method:'POST',
    headers:headers,
    body:JSON.stringify({
      //vision可视图片
      model:'moonshot-v1-8k-vision-preview',
      messages:[
        {
          role:'user',
          content:[
            {
              type:'image_url',//base64图片
              image_url:{"url":imgData}
            },
            {
              type:'text',
              text:picPrompt
            }
          ]
        }
      ]
    })
  })
  const data = await response.json()
  console.log(data)
  const replyData = JSON.parse(data.choices[0].message.content)
  setWord(replyData.representative_word)
  setSentence(replyData.exple_sentence)
  const audioUrl = await generateAudio(replay.example_sentence);
}


  return (
    //在react中，这不是html,而是jsx，jsx是js的扩展，jsx是一种语法，它允许我们在js中编写html
   <div className="container">
    {/* 自定义组件，子组件 */}
    {/* 组件，html,css,js,把这些组合起来，实现图片上传功能，模块化，可复用 */}
    {/* 页面由DOM树 变成 组件树 */}
    {/* props */}
    <PictureCard 
      uploadImage={uploadImage}
      word={word}
      audio={audio}
    />
<div className="output">
  <div>{sentence}</div>
</div>

   </div>
  )

  
}

export default App
