//多个直接输出
export const generateAudio =(text)=>{
    const token = import.meta.env.VITE_AUDIO_ACCESS_TOKEN
    const appId = import.meta.env.VITE_AUDIO_APP_ID
    const clusterId = import.meta.env.VITE_AUDIO_CLUSTER_ID
    const voiceName = import.meta.env.VITE_AUDIO_VOICE_NAME
    const endpoint = "/tts/api/v1/tts"
    const headers = {
        'Content-Type':'application/json',
        Authorization:`Bearer;$(token)`
    }
    const payload ={
        app:{
            appid:appId,
            token,//es6省略对象写法
            cluster:clusterId

        },
        user:{
            uid:'bearbobo'
        },
        audio:{
            vioce_type:voiceName,
            encoding:'ogg_opus',
            compression_rate: 1,
            rate: 24000,
            speed_ratio: 1.0,
            volume_ratio: 1.0,
            pitch_ratio: 1.0,
            emotion: 'happy',
        },
        request: {
            reqid: Math.random().toString(36).substring(7),
            text,
            text_type: 'plain',
            operation: 'query',
            silence_duration: '125',
            with_frontend: '1',
            frontend_type: 'unitTson',
            pure_english_opt: '1',
        },
    }

}

/* export const generateAudio=()=>{

} */


/* import {generateAudio} from './lib/audio'
import App from 'react'
export default App */