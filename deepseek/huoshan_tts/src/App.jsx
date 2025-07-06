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

import { useState, useRef } from 'react' // 引入 React 的 Hook 函数，用于状态管理和 DOM 元素的引用
import './App.css' // 引入样式文件 App.css

function App() {
  // 配置：从环境变量中读取 VITE_TOKEN、VITE_APP_ID 和 VITE_CLUSTER_ID
  const { VITE_TOKEN, VITE_APP_ID, VITE_CLUSTER_ID } = import.meta.env

  // 状态 prompt: 存储用户输入的文本内容，初始值为 'hi~，想我了吗？'
  const [prompt, setPrompt] = useState('妖精！吃俺老孙一棒！')

  // 状态 status: 用于控制界面状态，可以是 "准备"、"loading" 或 "done"
  const [status, setStatus] = useState("准备")

  // 使用 useRef 创建一个 audioRef 来绑定音频元素（<audio>），以便在 JS 中直接操作 DOM
  const audioRef = useRef(null)

  /**
   * 将 Base64 编码的音频数据转换为 Blob URL，用于播放音频
   * @param {string} base64AudioData - Base64 格式的音频数据
   * @returns {string} 返回 Blob URL
   */
  function createBlobURL(base64AudioData) {
    var byteArrays = []; 
    var byteCharacters = atob(base64AudioData); // 解码 Base64 字符串
    for (var offset = 0; offset < byteCharacters.length; offset++) { 
      var byteArray = byteCharacters.charCodeAt(offset); // 将每个字符转为字节
      byteArrays.push(byteArray); 
    } 
    var blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' }); // 创建 Blob 对象
    return URL.createObjectURL(blob); // 返回可播放的 URL
  }

  // 调用火山 TTS 接口生成语音
  const generateAudio = () => {
    const voiceName = "zh_male_sunwukong_mars_bigtts" // 指定语音风格（孙悟空男声）
    const endpoint = "/tts/api/v1/tts" // API 请求地址

    // 设置请求头，包含 Content-Type 和 Authorization（Bearer Token）
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer;${VITE_TOKEN}`,
    }

    // 构建 POST 请求体，包含应用信息、用户信息、音频参数和请求参数
    const payload = {
      app: {
        appid: VITE_APP_ID,
        token: VITE_TOKEN,
        cluster: VITE_CLUSTER_ID,
      },
      user: {
        uid: 'bearbobo' // 用户 ID
      },
      audio: {
        voice_type: voiceName, // 语音类型
        encoding: 'ogg_opus', // 音频编码格式
        compression_rate: 1, // 压缩率
        rate: 24000, // 采样率
        speed_ratio: 1.0, // 语速比例
        volume_ratio: 1.0, // 音量比例
        pitch_ratio: 1.0, // 音高比例
        emotion: 'happy', // 情感
      },
      request: {
        reqid: Math.random().toString(36).substring(7), // 生成随机请求 ID
        text: prompt, // 输入的文本
        text_type: 'plain', // 文本类型
        operation: 'query', // 操作类型
        silence_duration: '125', // 静默时长
        with_frontend: '1', // 是否启用前端处理
        frontend_type: 'unitTson', // 前端处理类型
        pure_english_opt: '1', // 英文优化选项
      }
      
    }

    setStatus('loading') // 设置状态为 loading，表示正在加载音频

    // 发起 POST 请求调用 TTS 接口
    fetch(
      endpoint, 
      {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    }
    ).then(res=>res.json()) // 将响应解析为 JSON 数据
    .then(data=>{
      // 调用 createBlobURL 方法将 Base64 数据转为音频 URL
      const url = createBlobURL(data.data);

      // 将音频 URL 赋值给 <audio> 元素的 src 属性，并自动播放
      audioRef.current.src = url;
      audioRef.current.play();

      // 设置状态为 done，表示音频已生成并开始播放
      setStatus('done')
    })
  }

  return (
    <div className='container'>
      <div>
        
        {/* 点击按钮后触发 generateAudio 函数 */}
        <button onClick={generateAudio}>点我啊~</button><br />
        
        {/* 文本输入框，绑定到 prompt 状态，onChange 事件更新 prompt */}
        <textarea
          className="input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

      </div>
      <div className='out'>
        {/* 显示当前状态，如 loading 或 done */}
        <div>{status}</div>

        {/* 绑定 audioRef 的 <audio> 元素，用于播放生成的音频 */}
        <audio ref={audioRef}/>
      </div>
    </div>
  )
}

export default App // 导出 App 组件，作为默认导出