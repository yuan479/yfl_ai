// 入口文件
// console.log('胡老板的发量,羡慕');
// ai llm sdk 事实标准 
import OpenAI from 'openai'; // 模块化引入

const openai = new OpenAI({
    apiKey: 'sk-wiybwxcwsqfbwmodahgeygnrzemnfmsoibxidotzolhutetr', // 赚钱的 身份
    baseURL: 'https://api.siliconflow.cn/v1' // 国内转发服务商
});
// 完成接口 
// await 等待 
const response = await openai.completions.create({
    // 通义千问
    model: 'Qwen/QwQ-32B',
    max_tokens: 256,
    temperature: 0.1,
    prompt: `
    介绍一下你自己
    `
})

console.log(response);