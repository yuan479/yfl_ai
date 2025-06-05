// 这里可以添加JavaScript代码
/* console.log('WebLLM项目已加载'); */
//js 主动地去拉取一个http 接口
//web 1.0 时代 html/css/js 服务器端 java 返回的 js 只做简单的交互
//web 2.0 时代 前后端分离 js 主动请求后端服务器 可以做动态页面

/* fetch('https://api.github.com/users/yuan479/repos')
    .then(res => res.json())
    .then(data => {
          console.log(data); 
        document.querySelector('#reply').innerHTML += data.map(repo => `
<ul>
<li>
${repo.name}
</li>
</ul>



`)
    }) */
// 当LLM API 服务
// chat 方式 AIGC 生成/完成 返回的内容
// 由Open AI 制定的
// 请求行
//api.deepseek.com 二级域名
const endpoint = "https://api.deepseek.com/chat/completions"
//请求头
const headers = {
    //内容类型
    'Content-Type': 'application/json',
    //授权
    'Authorization': 'Bearer sk-aa661822bf1b442ba5e9e2dd201da865'
}
//请求体

const payload = {
    model: "deepseek-chat",
    messages: [
        //chat 3种方式
        //1.系统角色： 只会出现一次 设置系统的角色 开始绘画时
        //2.用户角色 user 提问
        //3.助手角色
        { role: 'system' ,content: '你是一个天马行空的小助手' },
        { role: 'user', content: '讲一个谐音梗冷笑话' },
    ],
}

fetch(endpoint ,{
    method: 'POST',
    headers: headers,
    //http 请求传输的只能是字符串，二进制流
    //http 请求是基于请求响应的简单协议
    //返回的也是文本或二进制流
    body: JSON.stringify(payload)
    //请求 + LLM生成响应要花时间，返回res
}).then(res => res.json())
//解析返回的json数据也要花时间
.then(data => {
    console.log(data);
    document.querySelector('#reply').innerHTML += data.choices[0].message.content
})