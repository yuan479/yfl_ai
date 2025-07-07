# react 事件机制

- js 事件机制 
  - 异步
  - 如何监听一个事件？
    addEventListener() 标准的DOM2级监听事件
    DOM0级监听事件 attachEvent()
    <a onclick = "doSomething()"></a>
    有没有DOM1级事件？ 这是DOM版本，DOM1 没有做事件升级，所以没有DOM1级事件

  - addEventListener(type , listener ， useCaputure) 
  - 回调函数 callback 异步处理的总称
  - promisre then 
  - async await 异步变成同步
    监听器
- 注册事件 addEvementListener
- useCapture false 默认值
  页面是由浏览器渲染引擎按像素点画出来的 就像png
  鼠标点击后，触发事件，先捕获，通过从最外层的document一层层问，找到event.target 得到点击的坐标
  先触发父元素，再触发子元素
  捕获阶段结束，拿到event.target
  冒泡
    从event.target 开始，一层层的冒泡到html
    为什么要冒泡？ 
    控制事件在那个阶段执行，解决事件先后顺序问题
  