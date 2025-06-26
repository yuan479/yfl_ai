# 回流重绘
- 布局的难点 列式布局和理解BFC/FFC
  - html 根元素，也是最外层的第一个BFC元素
    Block Formatting Context 块级格式化上下文 块级从上到下，行内从左到右，BFC 格式化上下文有了文档流

  - 浮动元素 float overflow:hidden flex 
  - 问：有没有什么标签可以做列式布局？
    - table 表格布局  不推荐

  - tr td
    为什么不推荐？
    - 语义化问题：table 是用来展示数据的，用来布局容易混淆
      tr row
      td cloumn
      - 性能问题：table 是一个完整的html元素，会触发浏览器的重新布局和重绘，影响性能。
    - 不太灵活：当需要对布局进行调整时，修改表格布局通常比修改基于CSS的布局要困难得多
    - 会触发太多回流和重绘，影响性能。

## 回流和重绘
  - 回流（reflow）
  ：当元素的**几何**属性发生变化时，浏览器需要重新计算元素和周围元素的位置和大小，这称为回流/重排。
    - 当render Tree 中部分或全部元素的尺寸，结构，或某些属性发生改变时，浏览器会重新渲染部分或全部文档的过程，这被称为回流。
    - table不适合，table中局部的改变，会导致整个table的回流重排。  火烧赤壁
    - dispaly：none  隐藏元素，不占据空间，不会触发回流  性能优化的一种方案
    - visibility：hidden  隐藏元素，占据空间，不会触发回流

    - 触发回流的方式
      1. 页面的首次渲染 严格意义不是 0->有 最耗时  京东数据：网页每慢0.1秒，少赚1000万 要让用户感觉爽
      2. 浏览器窗口的大小改变
      3. 元素的尺寸、位置发生变化 （transition，transform，opacity 新图层除外）
      4. 元素的内容 appendChild removeChild
      5. display:none block 等
      6. 元素的字体大小变化
      7. 激活伪类：hover
         color:? 浏览器需要重新计算元素的样式和布局
      8. 读取元素的某些属性或调用某些方法：
         img.getBoundingClientRect()  获取元素的位置和尺寸  代价：触发回流
         ret{

         }


  - 重绘（repaint）
  ：当元素的**外观**属性发生变化时，浏览器需要重新绘制元素的外观，这称为重绘。
    - 当页面元素样的改变并不影响它在文档流中的位置时，浏览器会重新绘制元素的外观，这被称为重绘。
      color  background-color  visibility  hidden  show

## 页面是怎么渲染的？
  - 输入url
  - 下载html
    - 下载字节
    - 把字节解析成字符 用utf-8 编码
    - 解析html 通过开关标签属性 为构建DOM树做准备
    - 节点对象
    - 构建DOM树
  - 碰到link 标签，下载css 没有css html无意义
    - 下载字节码 Content-Type text/html  text/css
    - 编码 utf-8 得到 css 文本
    - token 词法分析  把css文本转换成token
    - 生成 css rule 节点
    - 生成cssom 树
  - Layout 树
    - 布局，盒模型， 大小，确定元素在文档流中的位置和大小
  - 图层
    - z-index 
    - position:fixed 弹窗
    - transtion + transform / opacity
    - animation
    - translate(50%,50%,50%) 3d页面 GPU 加速
    - 1个图层 主要文档流图层= DOM树 + CSSOM树 -> Render Tree<->Layout Tree
    - 2个图层 = DOM树 + CSSOM树 -> Render Tree<->Layout树
    ...
  - 图层的合并
    - 把所有图层合并，交给浏览器的渲染引擎绘制平面 像素点绘制


  - js不能放上面的原因：
    - 确保脚本的执行顺序：
        如果 JS 脚本修改了 DOM（例如通过 document.write 或直接操作 DOM 元素），而浏览器继续解析后续的 HTML 内容，可能会导致 DOM 结构与实际脚本执行结果不一致，引发逻辑错误。
    - 避免依赖问题：
        如果后续 HTML 元素依赖当前 JS 脚本定义的函数或变量，提前解析 HTML 可能会导致引用未定义的错误（例如调用未声明的函数）。
