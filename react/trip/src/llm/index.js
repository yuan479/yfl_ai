/**
 * chat 聊天
 * 
 * 
 * 
*/

const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions'
const KIMI_CHAT_API_URL = 'https://api.moonshot.cn/v1/chat/completions'

export const chat = async (
    messages,
    api_url = DEEPSEEK_CHAT_API_URL,
    api_key = import.meta.env.VITE_DEEPSEEK_API_KEY,
    model= 'deepseek-chat'

) => {
    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`, // 替换为你的 DeepSeek API 密钥
            },
            body: JSON.stringify({
                model, // 使用 DeepSeek 的聊天模型
                messages, // 用户的消息
                stream: false, // 不使用流式响应
            })
        })
        const data = await response.json()
        return {
            code: 0,
            data: {
                role: 'assistant',
                content: data.choices[0].message.content,
            }

        }
    } catch (err) {
        return {
            code: 0,
            msg: "失败",

        }
    }
}


export const kimiChat = async (messages)=>{
    const res = await chat(
        messages,
        KIMI_CHAT_API_URL,
        import.meta.env.VITE_KIMI_API_KEY,
        'moonshot-v1-auto'
    )
    return res
}

export const generateAvatar= async(text)=>{
    const prompt=`你是一个头像生成助手，你要为用户设计一个头像，主打抽象风格。
    用户的信息是${text},
    要求抽象，有个性。`
}