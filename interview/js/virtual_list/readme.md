# 虚拟列表

*一次性给你100000 条数据插入页面，怎么做？*
 - 时间分片
 - 虚拟列表
     加载视窗内的数据
     #container 有一定高度，scroll 
     偏移量 offsetTop  transform一下，translateY
     index start -> end 20条数据，计算出每一条的高度 item height


  从eventLoop来看
    - js 单线程的开销很大，造成页面的卡顿
    - 页面的渲染开销大
    