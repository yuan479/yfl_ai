const getAudioUrl = (base64Data) => {
    // 创建一个数组来存储字节数据
      let byteArrays = [];
      // 使用atob()将Base64编码的字符串解码为原始二进制字符串
      // atob: ASCII to Binary
      let byteCharacters = atob(base64Data);
      // 遍历解码后的二进制字符串的每个字符
      for (let offset = 0; offset < byteCharacters.length; offset++) {
          // 将每个字符转换为其ASCII码值（0-255之间的数字）
          let byteArray = byteCharacters.charCodeAt(offset);
          // 将ASCII码值添加到字节数组中
          byteArrays.push(byteArray);
      }
      // 创建一个Blob对象
      // new Uint8Array(byteArrays)将普通数组转换为8位无符号整数数组
      // { type: 'audio/mp3' } 指定Blob的MIME类型为MP3音频
      
      let blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' });
       // 使用URL.createObjectURL创建一个临时的URL
      // 这个URL可以用于<audio>标签的src属性
      // 这个URL在当前页面/会话有效，页面关闭后会自动释放
      // 创建一个临时 URL 供音频播放
      return URL.createObjectURL(blob);
  }

export const generateAudio = async (text) => {
    const token = import.meta.env.VITE_AUDIO_ACCESS_TOKEN;
    const appId = import.meta.env.VITE_AUDIO_APP_ID;
    const clusterId = import.meta.env.VITE_AUDIO_CLUSTER_ID;
    const voiceName = import.meta.env.VITE_AUDIO_VOICE_NAME;

    const endpoint = '/tts/api/v1/tts';
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer;${token}`,
    };

    const payload = {
        app: {
            appid: appId,
            token,
            cluster: clusterId,
        },
        user: {
            uid: 'liufengfeng',
        },
        audio: {
            voice_type: voiceName,
            encoding: 'ogg_opus',
            compression_rate: 1,
            rate: 24000,
            speed_ratio: 1.0,
            volume_ratio: 1.0,
            pitch_ratio: 1.0,
            emotion: 'happy',
            // language: 'cn',
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
    };

    const res=await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
    });

    const resData=await res.json();
    const audioUrl=getAudioUrl(resData.data);
    return audioUrl;
}