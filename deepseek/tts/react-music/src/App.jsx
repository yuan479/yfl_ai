import { useState, useRef } from 'react'

import './App.css'

function App() {
  //火山引擎tts配置文件
  const TOKEN = 'Knhk-LgHTDtoJ5J2Sh2eLTdk0o8xYXZR';
  const APP_ID = '6239060583';
  const CLUSTER_ID = 'volcano_tts';
  //代码的可读性
  const [prompt, setPrompt] = useState('大家好')

  //react use 开头 ref hook 可以获取DOM元素
  const audioPlayer = useRef(null)
  /*  console.log(audioPlayer,'//////') */

  const playMusic = () => {
    /*    console.log(audioPlayer,'///////') */
    /*  console.log('你点击了播放') */
    /*    audioPlayer.current.play()
       const audio = document.querySelector('audio')
       audio.play() */
    audioPlayer.current.play();
  }
  const generateAudio = () => {
    // 女性 
    // const voiceName = "zh_female_shuangkuaisisi_moon_bigtts";
    const voiceName = "zh_male_sunwukong_mars_bigtts";
    const endpoint = "/tts/api/v1/tts" // tts api llm 服务接口地址
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer;${TOKEN}`
    }
  }
  
  return (

    <>
      <div className='container'>
        <div>
          <label> Prompt</label>
          <button onClick={generateAudio}>生成并播放</button>
          <textarea className="input" value={prompt} onChange={(e) => { setPrompt(e.target.value) }}></textarea>

        </div>

        <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      <button onClick={playMusic}> 播放 </button>
      </div>
      <button onClick={() => alert('hi~，想我了吗')}>更原始的事件，如初恋般</button>
    </>
  )
}

export default App
