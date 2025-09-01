import OpenAI from "openai";
import { config } from "dotenv";

config();
//console.log(process.env.OPENAI_API_KEY);
const cline = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseUrl: process.env.OPENAI_BASE_URL,
})
// LLM 的聊天和 Http一样是无状态的，它不会记住之前聊天的内容
const messages = [
    {
        role: "system",
        content: "你是一个认真的聊天助手"
    }
]
async function withnoMemoryChat(userInput) {
    messages.push({
        role: "user",
        content: userInput
    })
    const res = await cline.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: "我的名字是卡厄斯兰纳"
            }
        ],
    })
    const reply = res.choices[0].message.content
    messages.push({
        role: "assistant",
        content: reply
    })
    console.log("回复："+reply);
    return reply
}

async function main() {
    const reply1 = await withnoMemoryChat("我的名字是卡厄斯兰纳");
    const reply2 = await withnoMemoryChat("我叫什么名字");
}
main();