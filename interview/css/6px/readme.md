# 把字体设置为6像素

## 6px
- 以前的浏览器最小字体为12px ，更小的字体不支持
- 12px +transform:scale(0.5)可以把字体变成6px

## 1px 
- 来自于移动端
- 的边框看上去有点粗，手机比较好，像素密度比较大
- 
- 用伪元素，方便，content属性是必须的
  定位 专职去做下边框
  transform:scaleY(0.5) 向线的中间压缩，
  transform-origin center bottom 