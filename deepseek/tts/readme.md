# tts 智能语音

## 智能前端 AI用户体验
- webllm
 AIGC api remote call
- tts 语音 
  音乐软件：网易云，qq音乐
- 用户体验
 音乐不要自动播放，容易社死
 用户决定要不要播放
## 如果不能做DOM 编程 react 里面怎么播放音乐？
- 原生的js DOM API 低效 react 里面 document.querySelector() 不用
- audio 播放

## 路径
- 相对路径
  ./ 同一级别
  ../ 上一级
  ./demo/      沿路可以走到其他目录
- 绝对路径
  物理路径 C:
  网站根路径 /  -> index.html
  - http://localhost:5173/sounds/snare.wav
  当我们npm run dev 启动本地服务器 http://127.0.0.1:5173 ,然后把 index.html渲染到服务器
  端口背后对应的是不同的服务
  - index.html 首页 
  - public 放文件夹里面的静态资源
    约定所有的资源可以直接访问

## react 事件机制

- 不可以用 

## 小红书event 事件机制 JavaScript 高级程序设计 1000+

- 多种事件机制
  DOM0 事件
  onclick  html 属性 缺点是耦合了 -> 不推荐
  DOM2 事件
 addEventListener 事件->DOM2级事件 html和js 事件上分离
 - react
  采用了 DOM0 的方式,有利于组件html的表达 好读写
  @click 上，react优于vue
  DOM2 把 DOM0级事件借鉴过来, API层面看上去是这样的，其实就是底层还有天地

  ## useRef
  - 可以帮助我们在react中获取DOM元素
  - useRef(null) 一开始是一个空对象
  - current 属性一开始为null 
  - jsx 中，通过ref={ref} 把ref对象赋值给current属性,与DOM元素绑定

