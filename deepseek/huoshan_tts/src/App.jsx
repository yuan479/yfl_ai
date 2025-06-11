/* import { useState } from 'react'

import './App.css'

function App() {
  // 环境变量 
  console.log(import.meta.env.VITE_TOKEN,'?????')
  return (
    <>
    
    </>
  )
}

export default App
 */
/* ---------------------------------------------------------------------- */

import { useState, useRef } from 'react'
import './App.css'

function App() {
  //配置
  const { VITE_TOKEN, VITE_APP_ID, VITE_CLUSTER_ID } = import.meta.env
  console.log(VITE_TOKEN, VITE_APP_ID, VITE_CLUSTER_ID, '<----------')

  // 状态prompt, 接受界面由数据状态驱动
  const [prompt, setPrompt] = useState('hi~，想我了吗？')
  // 状态ready , watting,done 接受界面由数据状态驱动
  const [status, setStatus] = useState("准备")
  // DOM对象绑定，use开头的都是hook函数，可以获取DOM元素
  const audioRef = useRef(null)

  function createBlobURL(base64AudioData) {
    var byteArrays = []; 
    var byteCharacters = atob(base64AudioData); 
    for (var offset = 0; offset < byteCharacters.length; offset++) { 
      var byteArray = byteCharacters.charCodeAt(offset); 
      byteArrays.push(byteArray); 
    } 
    var blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' }); 
    return URL.createObjectURL(blob);
  }

  //去调用火山接口，返回语音，
  const generateAudio = () => {
    const voiceName = "zh_female_meilinvyou_moon_bigtts"
    const endpoint = "/tts/api/v1/tts" //api地址
    // 请求头
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer;${VITE_TOKEN}`,
    }
    //post 请求体
    const payload = {
      app: {
        appid: VITE_APP_ID,
        token: VITE_TOKEN,
        cluster: VITE_CLUSTER_ID,
      },
      user: {
        uid: 'bearbobo'
      },
      audio: {
        voice_type: voiceName,
        encoding: 'ogg_opus',
        compression_rate: 1,//压缩率
        rate: 24000,
        speed_ratio: 1.0,
        volume_ratio: 1.0,
        pitch_ratio: 1.0,
        emotion: 'happy',//情感
      },
      request: {
        reqid: Math.random().toString(36).substring(7),//请求随机id
        text: prompt,
        text_type: 'plain',//文本类型
        operation: 'query',//操作类型
        silence_duration: '125',
        with_frontend: '1',
        frontend_type: 'unitTson',
        pure_english_opt: '1',
      }
      
    }
    setStatus('loading')
    fetch(
      endpoint, 
      {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    }
    ).then(res=>res.json())
    .then(data=>{
      console.log(data,'!!!!!!!!!!!!!!')
      // 黑盒子 可以以base 64 字符串编码的格式表达图片，声音，视频
      // 编解码的问题
      const url = createBlobURL(data.data);//返回一个可以播放声音的url
      audioRef.current.src = url;
      audioRef.current.play();
      // 状态更新
      setStatus('done')
    })
  }


  return (
    <div className='container'>
      <div>
        <label >Prompt</label>
        <button onClick={generateAudio}>点我啊~</button>
        <textarea
          className="input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

      </div>
      <div className='out'>
        <div>{status}</div>
        <audio ref={audioRef}/>
      </div>
    </div>

  )
}

export default App
