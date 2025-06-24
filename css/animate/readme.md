# 动画
- 从url输入到页面渲染

- 动画相关的内容
    - transition 过渡
    - transform 变形/变基
    - animation 关键帧动画
    - js 控制动画

- dom 对象
    requestAnimationFrame 是一种用于网页的API，它告诉浏览器您希望执行动画，并请求浏览器在下一次重绘之前调用指定的回调函数，从而实现平滑且高效的动画效果。

    - 通过频繁修改dom 节点的style 属性
    - 通过requestAnimationFrame 方法
      请求动起来 帧
      dom 动画和屏幕的刷新帧率是一致的
      + 递归

- web 程序
  - 浏览器 由c++ 写的
  - 输入是 html css
  - 输出 静态页面效果 此时页面完成了渲染
  - domContentLoaded 事件还没完成页面渲染
  - setTimeout(() =>{ } , 0) 会以页面渲染优先

- js 动画和css 动画选择哪一个？

  - js 动画代码更加复杂，性能差一点？ 不推荐做动画
    因为要频繁地操作dom，这是js性能开销的主要问题
    每次刷新都要进行页面的重新绘制，开销大

  - css 更加简单，性能好（transform opacity），因为它省去了dom对象的操作
    transition 不用不停地绘制？
    真不会那么像js一样触发那么多次的重新绘制。

- 页面渲染过程
  
  1. DOM树的构建
    - 从字节开始，网络层的传输
    - 字节流 会根据编码<UTF-8> ,得到html字符串
    - 令牌化 识别标签名（用正则），属性，解析
    - 转成一个dom 节点对象，如：
      <div id="box"></div>
      {
        type:'div'
        attrs:{
            id:'box'
        },
        children:[{...}]
        //递归解析子元素
      }
      - 与树数据结构的结合，在查找和操作这块，非常高效，作为render的输入
  2. CSSOM 树的构建
    - 

  3. DOM树和CSSOM树结合，生成renderTree树
    - 


  4. Layout 概念布局 BFC
    - 结合盒子模型和大小计算，确定文档流的位置和大小，计算在屏幕上的确切位置
    - 应用规则和计算的过程

  4.5. 图层 z-index 离开文档流absolute transform opacity 
    浏览器用新的图层来计算，绘制(修改的时候只要修改这一个图层)
    GPU 去计算 性能

  5. 绘制出来 画图
    - 用像素点

----------------------第一次绘制结束--------------------
- 更新？js transition
- 修改了它的颜色（背景，文字），重绘  性能可以
- 改变了盒子，会导致页面的重排，开销大
- transition left的修改， 