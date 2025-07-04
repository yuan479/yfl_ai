import { useState, useRef } from 'react';
import './App.css';

function App() {
  // 火山引擎 TTS 配置文件
  const TOKEN = 'Knhk-LgHTDtoJ5J2Sh2eLTdk0o8xYXZR';
  const APP_ID = '6239060583';
  const CLUSTER_ID = 'volcano_tts';

  // 状态变量（建议使用语义化名称）
  const [prompt, setPrompt] = useState('大家好');

  // 获取 DOM 元素的 ref
  const audioPlayer = useRef(null);

  const playMusic = () => {
    if (audioPlayer.current) {
      audioPlayer.current.play();
    }
  };

  const generateAudio = () => {
    // 此处添加生成音频的逻辑
    console.log('生成音频:', prompt);
  };

  return (
    <>
      <div className='container'>
        <div>
          <label htmlFor="promptInput">
            <button onClick={generateAudio}>生成并播放</button>
            <textarea
              id="promptInput"
              className="input"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </label>
        </div>
      </div>

      <audio ref={audioPlayer} src="/sounds/snare.wav"></audio>
      <button onClick={playMusic}>播放</button>
      <button onClick={() => alert('hi~，想我了吗')}>更原始的事件，如初恋般</button>
    </>
  );
}

export default App;