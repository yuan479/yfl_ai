import { useState, useRef, useEffect } from 'react'
import './App.css'
import Progress from './components/Progress'
import AudioPlayer from './components/AudioPlayer'
import { SPEAKERS, DEFAULT_SPEAKER } from './constants'

function App() {
  //界面状态
  //llm ready 大模型准备好了没？
  const [ready, setReady] = useState(null)
  //按钮点击，防止重复点击
  const [disabled, setDisabled] = useState(false)
  //进度条数组
  const [progressItems, setProgressItems] = useState([])
  //表单文本
  const [text, setText] = useState('I love you')
  //音色
  const [selectedSpeaker, setSelectedSpeaker] = useState(DEFAULT_SPEAKER)
  //输出音频
  const [output, setOutput] = useState(null)



  const worker = useRef(null)

  useEffect(() => {
    //引入 transformer
    //http://localhost:5173//work.js
    worker.current = new Worker(new URL('./work.js', import.meta.url), {
      type: 'module'//支持es6模块化
    })

    worker.current.postMessage({
      text: 'hi~，想我了吗🎵',
    })

    const onMessageReceived = (e) => {

    }

    worker.current.onmessage = onMessageReceived;

    return () => {
      worker.current.removeEventListener('message', onMessageReceived)
    }
  }, [])

  return (
    <>
      <Progress text="model" percentage={12} />
      <Progress text="model" percentage={50} />
      <Progress text="model" percentage={99.99} />
      <AudioPlayer
        audioUrl="https://cdn.freesound.org/previews/819/819183_12880153-lq.mp3"
        mimeType="audio/mpeg"
      />
      <div className="flex"></div>
    </>
  )
}

export default App
