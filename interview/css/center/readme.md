#居中
- 方法不是关键，关键是优劣
  - 水平居中
    - text-align: center;
      单行文本垂直居中 line-height=height padding
     - 固定宽高块级盒子水平垂直居中 
      absolute +margin +负边距
      缺点：需要知道盒子的宽高
      absolute +margin auto(重要)
      absolute +calc(css calc 计算属性)
      缺点：性能差，很少用

     - 不固定宽高块级盒子水平垂直居中
      absolute +transform
      line-height+vertical-align
      writing-mode
      
    - transfrom 相对自身大小的百分比