const fs = require('fs') // fs 帮我们读取文件
const path = require('path')
const { OpenAI } = require('openai')
require('dotenv').config()

// 使用 ollama
// 给它喂私有知识库，不怕私有知识被大模型训练，解决安全问题
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
})

const testQuestion = "有多少门课程"

function readCourseInfo() {
    try {
        const filePath = path.join(__dirname, 'lesson.txt')
        console.log(filePath)
        return fs.readFileSync(filePath, 'utf8')
    } catch (error) {
        console.error('读取失败', error)
        return ''
    }
}

async function answerQuestion(question) {
    // 检索
    const courseInfo = readCourseInfo()
    console.log(courseInfo)
    if (!courseInfo) {
        return '无法读取，请确保文件存在且有内容'
    }
    try {
        const prompt = `
        你是一个课程助手，请根据这些课程信息回答问题。
        注意，你只回答与课程相关的信息内容，如果内容与课程无关，请回复"可莉不知道哦~"

        课程信息：${courseInfo}
        问题：${question}
        `
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: "system",
                    content: "你是一个课程助手，请根据课程信息回答问题。"
                },
                {
                    role:'user',
                    content:prompt
                }
            ],
            temperature: 0.1, //自由度，越小越严谨
        })
        return response.choices[0].message.content;
    } catch (error) {
        console.error('调用失败',error)
        return '执行出错！执行出错！即将启动自毁程序!'
    }
}

answerQuestion(testQuestion)
    .then(answer => {
        console.log('问题',testQuestion)
        console.log('回答',answer)
    })