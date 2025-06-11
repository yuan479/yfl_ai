import { useState, useRef } from 'react'

import './App.css'

function App() {
  //火山引擎tts配置文件
  const TOKEN = 'Knhk-LgHTDtoJ5J2Sh2eLTdk0o8xYXZR';
  const APP_ID = '6239060583';
  const CLUSTER_ID = 'volcano_tts';
  //代码的刻度
  const [propt, setPropt] = useState('大家好')

  //react use 开头 ref hook 可以获取DOM元素
  const audioPlayer = useRef(null)
  /*  console.log(audioPlayer,'//////') */

  const playMusic = () => {
    /*    console.log(audioPlayer,'///////') */
    /*  console.log('你点击了播放') */
    audioPlayer.current.play()
    const audio = document.querySelector('audio')
    audio.play()
  }
  const generateAudio = () => {

  }
  return (

    <>
      <div className='container'>
        <div>
          <label htmlFor="">
            <button onClick={generateAudio}>生成并播放</button>
            <textarea className="input" value={prompt} onChange={e}=>{setPropt

            }
          </textarea>
        </label>
      
    </div >
</div >

    </div >
      <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      <button onClick={playMusic}> 播放 </button>
      <button onClick={() => alert('hi~，想我了吗')}>更原始的事件，如初恋般</button>
    </>
  )
}

export default App
