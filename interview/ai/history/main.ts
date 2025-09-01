import OpenAI from "openai";
import { config } from "dotenv";

config();
//console.log(process.env.OPENAI_API_KEY);
const cline = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
})
let summary = "用户的基本详细"
const messages = [

]

async function smartChat(userInput) {
    messages.push({
        role: "user",
        content: userInput
    })


    if (messages.length >= 3) {
        const sumRes = await cline.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "请总结一下前面3轮的对话"
                }
                    .messages
            ]
        })
        summary += sumRes.choices[0].message.content + "\n"
        messages.splice(0, messages.length)//清空老对话
    }
    const res = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "你是一个助教，这是目前的总结：" + summary
            },
            ...messages,

        ]
    })
    const reply = res.choices[0].message.content
    messages.push({
        role: "assistant",
        content: reply
    })
    console.log('ai回复：', reply)
}