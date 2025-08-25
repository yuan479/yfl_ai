# 性能优化

*重绘重排*

- 重绘
  当元素样式改变但不影响布局时，浏览器重新绘制元素的过程。
  如：改变颜色背景等


- 重排
  DOM元素的尺寸，位置发生变化时，浏览器需要重新计算布局，影响其他元素位置的过程。
  **重排一定会触发重绘（性能开销更大），重绘不一定会触发重排**

*Demo 1：批量修改 DOM*
**类名替代**
```js
//错误的方法 ❌，这样会多次操作，可能触发多次重排重绘
//虽然现代浏览器会自动批量更新，合并修改优化，但是可以避免
const el =document.getElementById('MyEl');
el.style.width='100px';
el.style.height='100px';
el.style.margin='10px';
// 正确的方法✔️
el.style=''
el.className='my-class'//用类名而不是一堆js代码
```

**使用文档碎片**
```js

const fragment = document.creatmentDocumentFragment()
for(let i=0;i<10;i++){
    const el = document.createElement('div')
    fragment.appendChild(el) //没有重绘重排
}
document.body.appendChild(fragment)
//这段代码用于添加元素时，使用 document.createDocumentFragment() 优化
```

**脱离文档流操作 下线**
原理：将元素 display: none 后，它会从渲染树中移除，后续对它的修改不会触发任何重排或重绘，直到它重新显示。
```js
const el = document.getElementById('MyId')
el.style.position='absolute'
el.style.display='none'

el.style.display='block'
el.style.position='static'
```

**缓存布局信息**
```js
for(let i=0;i<100;i++){
    //❌每次offsetTop读取，都会触发重排以获得盒子的布局信息
    el.style.top = el.offsetTop + 1 +'px' 
}
```
```js
let top = el.offsetTop
for(let=0;i<100;i++){
    top++;
    el.style.top = top + 'px'
}
```

**使用transform 代替位置调整**
```js
el.style.left='100px'
//只触发重绘，性能更好
el.style.transform='translateX(100px)'
```

*资源加载优化*
  - 图片懒加载
  - 路由懒加载
      在代码文件上，code spliting 代码分割
  - 资源预加载
      未来可能会用到的资源
      <link rel='prefetch' href='/next-page.js'> 
      dns-prefetch dns 预解析
      preload 当前页面必须资源，立即加载
      script 资源的加载
      - 默认同步加载(阻塞式)
      - async //下载后立即执行，执行顺序不确定
      - defer  //等HTML执行完后执行，DOMContentLoaded之前执行
      - module

