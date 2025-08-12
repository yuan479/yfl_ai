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
    worker.current = new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module'//支持es6模块化
    })

    /*   worker.current.postMessage({
        text: 'hi~，想我了吗🎵',
      }) */

    const onMessageReceived = (e) => {
      console.log(e, '来自主线程')
      switch (e.data.status) {
        case 'initiate':
          setReady(false)
          setProgressItems(prev => [...prev, e.data])
          break
        case 'download':
          break
        case 'progress':
          setProgressItems(
            prev => prev.map(item => {
              if (getTopItems.file === e.data.file) {
                return {
                  ...item,
                  progress: e.data.progress
                }
              }
              return item
            })
          )
          break
        case 'done':
          setProgressItems(
            prev => prev.filter(item => item.file !== e.data.file)
          )
          break
        case 'ready':
          setReady(true)
          break
        case 'complete':
          setDisabled(false)
          const blobUrl = URL.createObjectURL(e.data.output)
          console.log(blobUrl)
          setOutput(blobUrl)
          break
      }
    }
    worker.current.onmessage = onMessageReceived;

    return () => {
      worker.current.removeEventListener('message', onMessageReceived)
    }
  }, [])

  const handleGenerateSpeech = () => {
    setDisabled(true)
    worker.current.postMessage({
      text,
      speaker_id: selectedSpeaker
    })
  }

  const isLoading = ready === false

  return (
    <>
      {/*  <Progress text="model" percentage={12} />
      <Progress text="model" percentage={50} />
      <Progress text="model" percentage={99.99} />
      <AudioPlayer
        audioUrl="https://cdn.freesound.org/previews/819/819183_12880153-lq.mp3"
        mimeType="audio/mpeg"
      />
      <div className="flex"></div> */}

      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        {/* llm 初始化 */}
        <div
          className="absolute z-50 top-0 left-0 w-full h-full transition-all px-8 flex flex-col justify-center text-center"
          style={{
            opacity: isLoading ? 1 : 0,
            pointerEvents: isLoading ? 'all' : 'none',
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(8px)'
          }}
        >
          {
            isLoading && (
              <label className='text-white text-xl p-3'>
                Loading MODEL...(only)
              </label>
            )
          }
          {
            progressItems.map(data => (
              <div key={`${data.name}/${data.file}`}>
                <Progress
                  text={`${data.name}/${data.file}`}
                  percentage={data.progeess}
                />
              </div>
            ))
          }
        </div>

        <div className="bg-white p-8 rounded-lg w-full max-w-xl m-2">
          <h1 className="text-3xl font-semibold to-gray-800 mb-1 text-center">
            端模型文本生成语言
          </h1>
          <h2 className="text-base font-medium text-gray-700 mb-2 text-center">
            Made with <a>Transfromer.js</a>
          </h2>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-600">
              文本
            </label>
            <textarea
              id="text"
              className='border border-gray-300 rounded-md p-2 w-full'
              rows="4"
              placeholder='输入文本'
              value={text}
              onChange={(e) => setText(e.target.value)}
            >
            </textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="speaker" className="block text-sm font-medium text-gray-600">
              音色
            </label>
            <select
              id="speaker"
              className='border border-gray-300 rounded-md p-2 w-full'
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
            >
              {//将可迭代对象快速转换为数组[[key:value],[key1:value1],[key2:value2],...]
                Object.entries(SPEAKERS).map(([key, value]) => (
                  <option key={key} value={value}>
                    {key}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="flex justify-center">
            <button
              className={`${disabled ?
                'bg-gray-400 cursor-not-allowed' :
                'bg-blue-500 hover-bg-blue-600'
                } text-white rounded-md py-2 px-4`}
              onClick={handleGenerateSpeech}
              disabled={disabled}
            >
              {disabled ? 'Generating...' : 'Generate'}
            </button>
          </div>
          {
            output && <AudioPlayer
              audioUrl={output}
              mimeType={"audio/wav"}
            />
          }
        </div>
      </div>
    </>
  )
}

export default App
