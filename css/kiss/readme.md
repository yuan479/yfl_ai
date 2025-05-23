# css animation

- html

    有两个div
    div有
    眉毛
    嘴巴
    腮红


- css
   怎么让两个div在一起
   用 border-radius
   进入 animation 的世界

- html快捷输入方式
   div#l-ball.ball    emmet 语法   css选择器
  - id 唯一
  - class 类名
  - 。container ? 容器
    弄个盒子  怎么页面居中？
    水平垂直居中
- .container>.ball#l+.ball#r
  >: 子元素选择器
  +: 兄弟元素选择器

- display 属性  切换行内块级的格式化上下文能力
  - block 块级元素
  - inline 行内元素
  - inline-block 行内块级 设置宽高 在一行
   既能够像块级元素一样独占一行，又能够像行内元素一样水平排列
   inline 行内 不可设置宽高
   block 块级 独占一行

- 面向对象的css
    多态  ->  复用 多类名
- 定位
    -position 定位
     static  静态定位 没有定位能力
     relative 相对定位 让元素相对于自己原来的位置进行定位
     absolute 绝对定位 让元素相对于最近的定位祖先元素进行定位
     absolute 绝对定位 找到离他最近的position 不为static 的属性定位
     直到 body 为止
     .container absolute  相对于body定位

  position: relative; 在 CSS 中有两个主要作用：

    1. 相对于自身原本的位置进行定位 ： 当元素设置为 position: relative; 时，可以通过 top 、 right 、 bottom 、 left 属性来调整元素的位置，但这些调整是相对于元素原本在文档流中的位置进行的。例如：
   .box {
   position : relative ;
   top : 10px ; /* 向下移动10px */
   left : 20px ; /* 向右移动20px */
   }
    2. 为子元素的绝对定位提供参考点 ： 如果一个子元素设置为 position: absolute; ，它的定位会相对于最近的设置了 position 属性（ relative 、 absolute 、 fixed 或 sticky ）的父元素。如果没有这样的父元素，则会相对于整个文档进行定位。例如：
   .parent {
   position : relative ;
   }
   .child {
   position : absolute ;
   top : 0 ;
   left : 0 ;
   }
总结： position: relative; 既可以用于调整元素自身的位置，也可以为子元素的绝对定位提供参考点。




