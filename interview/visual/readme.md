# 数据可视化

*echarts*
  给老板、客户看的数据报表
  echarts 是一个开源的，用于绘制柱状图，饼状图等的可视化库
*@types/echarts*
  echarts 的类型声明文件，是单独的
- 为什么react 不需要单独安装类型声明文件？
    react 是用typescript 写出来的，内置支持
    echarts 的原生js和类型声明文件是分开的，

*数据可视化好处*
- 可以直观看出数据的价值
  echarts 2D
  three.js 3D
  
*echarts 流程*
  1. 安装echarts ,@type/charts
  2. init 实例化
       实例化时要传给它一个图表的DOM挂载点
       useRef<HTMLDivElement>(null)
       null | HTMLDivElement 联合类型，因为它是一个useRef 可变对象
  3. setOption(option)
       里面最重要的内容是series，数据条目

