//transform.js 实现文本转语言  tts
import {
    env,
    Tensor,
    AutoTokenizer,
    SpeechT5ForTextToSpeech,
    SpeechT5HifiGan
} from '@xenova/transformers'
import{encodeWAV} from './utils'
/* env：负责配置ai模型运行环境对象 */
/* Tensor：AI 模型处理数据的基本单位 */
/* AutoTokenizer：AI自行分词器 */
/* SpeechT5ForTextToSpeech： 文本转语音模型*/
/* SpeechT5HifiGan：语音合成模型，将语音的特征和音色合成 */

//huggungFace 开源的大模型社区
env.allowLocalModels = false //禁用本地大模型，去请求远程的 tts

//单例模式 核心难点
//多次执行tts ai 业务，但是只会实例化一次
//它的实例化开销太大了，也没有必要
class MyTextToSpeechPipeline {
    // AI 语音模型的数据源地址，用于下载不同说话人的声音特征向量
    // 存的是每个字，每个词
    static BASE_URL = 'https://huggingface.co/datasets/Xenova/cmu-arctic-xvectors-extracted/resolve/main/';
    //文本 --> speecht5_tts 语音特征
    static model_id = 'Xenova/speecht5_tts'
    // 语言特征 --> speecht5_hifigan -->特有的角色音频文件
    static vocoder_id = 'Xenova/speecht5_hifigan'
    //模型实例
    static model_instance = null
    //分词器实例
    static tokenizer_instance = null
    //合成实例
    static vocoder_instance = null
    static async getInstance(progress_callback = null) {//这里要传一个回调函数给它
        //分词器实例化
        if (this.tokenizer_instance === null) {
            //之前处理过的大模型，大模型都是被预先训练过的
            this.tokenizer = AutoTokenizer.from_pretrained(this.model_id, {
                progress_callback
            })
            console.log(this.tokenizer,'<--------------1')
        }

        if(this.model_instance===null){
            //模型下载
            this.model_instance=SpeechT5ForTextToSpeech.from_pretrained(
                this.model_id,
                {
                    dtype:'fp32',
                    progress_callback
                }
            )
        }

        if(this.vocoder_instance===null){
            this.vocoder_instance=SpeechT5HifiGan.from_pretrained(
                this.vocoder_id,
                {
                    dtype:'fp32',
                    progress_callback
                }
            )
        }
        return new Promise(async(ResNetModel,reject)=>{
            const result=await Promise.all([
                this.tokenizer,
                this.model_instance,
                this.vocoder_instance
            ])
            self.postMessage({
                status:'ready'
            })
            resolve(result)
        })
    }
    static async getSpeakerEmbeddings(speaker_id) {
        const speaker_embeddings_url = `${this.BASE_URL}${speaker_id}.bin`;
        console.log(speaker_embeddings_url,'<--------speaker_embeddings_url')

        //张量
        //Tensor 是AI模型处理数据的基本单位
        //数据的转换 将二进制数据转换为Float32Array 数组
        //创建一个张量，构建1*512维度的特征向量
        const speaker_embeddings= new Tensor(
            'float32',
            new Float32Array(await (await fetch(speaker_embeddings_url)).arrayBuffer()),
            [1,512] //维度
        )
        return speaker_embeddings
    }
}
//es6 新增的数据结构 HashMap 先简单想象成为JSON对象
const speaker_embeddings_cache=new Map()

//const []=await MyTextToSpeechPipeline.getInstance() //没做懒加载
self.onmessage = async (e) => {
    // console.log(e)
    // ai pipeline 派发一个nlp任务   
    // 单例化做了一个懒加载 将初始化和加载放到第一次任务调试之时
    const [tokenizer,model,vocoder] = await MyTextToSpeechPipeline.getInstance(x => {
        self.postMessage(x)
    })

    const {
        input_ids
    }=tokenizer(e.data.text)
    //token 将是LLM的输入
    // 将原始的输入，分词为一个个word（字），对应的数字编码
    //向量的相似度，维度表示万事万物
    //prompt -> token -> llm(函数，向量计算，百亿级别) ->outpus
    
    //console.log(e.data.text,input_ids,'~~~~~~~~~~~~~')
    //基于model 生成的声音特征
    let speaker_embeddings = speaker_embeddings_cache.get(e.data.speaker_id)
    if(speaker_embeddings===undefined){
        //下载某个音色的特征向量
        speaker_embeddings=await MyTextToSpeechPipeline.getSpeakerEmbeddings(e.data.speaker_id)
        //将下载的特征向量存入缓存
        speaker_embeddings_cache.set(e.data.speaker_id,speaker_embeddings)
    }
    console.log(speaker_embeddings_cache,'<----------speaker_embeddings_cache')
    const{waveform}=await model.generate_speech(
        input_ids,//分词数组
        speaker_embeddings,//512维的向量
        {vocoder:vocoder}//合成器
    )
    console.log(waveform,'<----------waveform')
    const wav = encodeWAV(waveform.data) //将音频数据编码为WAV格式
    console.log(wav,'<----------wav')
    self.postMessage({ //将音频数据发送给主线程，用于播放
        status: 'done',
       output:new Blob([wav], {
         type: 'audio/wav' 
        })
    })
}