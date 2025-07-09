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
  捕获阶段结束，拿到evenSSt.target
  冒泡
    从event.target 开始，一层层的冒泡到html
    为什么要冒泡？ 
    控制事件在那个阶段执行，解决事件先后顺序问题
    
  捕获阶段来确定目标，确定目标后，事件让它在冒泡阶段执行
  


  ## 事件委托优势 delegation
  - 性能优化
   - 极致将水煎委托给最外层元素
     react 是做大型项目的开发
     给我们的事件节点event.target 添加一个唯一属性

  - 动态节点事件
    滚动到底部，一次新增一堆新的元素
    事件委托可以有效解决
  
  - 给同一个元素同一事件注册多次
    - dom 节点上进行注册
    - event type 事件类型
    - 监听器 不会立即触发 （回调函数） 放在event loop 中
      - 如果你是事件处理函数，它还会给 event 对象
    
  - useCapture 捕获阶段 true 冒泡阶段 false 从外到内

    - event.preventDefault() 阻止默认行为
      如：form submit, a href
    - event.stopPropagation() 阻止冒泡
      使用后，本来由外到内，使用后不再触发

    


    