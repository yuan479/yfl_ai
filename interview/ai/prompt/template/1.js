class PromptTemplate {
    constructor(template) {//模板
        this.template = template;
    }
    format(variables) {//填充变量
        let result = this.template
        //通过Object.enteries遍历对象，key是变量名，value是变量值，使用${key}进行替换
        for (const [key, value] of Object.enteries(variables)) {
            //按正则匹配全局的{key}，将{key}替换为value
            result = result.replace(new RegExp(`{${key}}`, 'g'), value)
        }
        return result
    }
}

const tourismTemplate = new PromptTemplate(`
    你是一个专业的旅游顾问，请根据用户的需求，在${city}规划一条${days}天的旅游计划。
    要求突出${performance}，给出每天的详细安排
`)

const userInput = {
    city: '西安',
    days: 3,
    performance: '历史文化'
}
const finalPrompt = tourismTemplate.format(userInput)//填充变量
console.log(finalPrompt)