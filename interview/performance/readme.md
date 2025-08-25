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
原理：使用 className 是一次性切换一组样式规则，浏览器可以在下一次重绘前统一处理所有 CSS 规则
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
原理：所有在 fragment 内部的 DOM 操作，不会触发任何重排或重绘，因为浏览器不需要渲染它，最后一次性将 fragment 插入 DOM，只触发一次重排。
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
      - module //功能
  - webp 格式的图片
      图片的优化，画质不变，体积减小
  - 图标字体库
    减少http请求数



*js执行优化*
  - 防抖节流
  - 文本workers 处理复杂计算
  - requestAnimationFrame 优化动画
  - requestIdCallback react fiber 机制
      - schedule 机制


*框架层优化*
  - memo,useMemo,useCallback 避免不必要的渲染
  - shadcn-ui 按需加载组件库
  - 合理使用key 优化列表渲染


*缓存策略*
  - 强缓存和协商缓存
    Expires(受限于客户端时间不准确) / Cache-Control 不发送请求
    LastModified if-modified-since 时间戳 304
    ETag if-none-match 
  - localStroage / sessionStroage / cookie

*网络优化*
  - CDN加速，将静态内容放CDN上，做到分流，动静分离，CDN会自动缓存文件
    多路复用，多域名服务器 img1.baidu.com img2.baidu.com
  - Gzip 压缩
  - HTTP/2 多路复用
  - DNS 预解析


*首屏优化*
  - SSR 
      组件渲染在服务器端就已经完成编译，执行，浏览器端直接显示就好
  - 骨架屏
  - http2.0 的server push 首屏数据推送

*性能测试*
  - chrome 的performance 面板
      可以看到各项性能指标，针对性的优化，我们可以以此给出优化建议，
      减少**首屏js/css体积(code spliting)**：一种将代码库拆分成更小、更易管理的块的技术，以便按需加载或并行加载，从而优化应用的加载性能和执行效率。
  - 使用transform 代替位置调整，预加载相关资源
  - 举例：
    掘金 js = vue + vur-router + App.vue + Home.vue + Components
    vue + vue-router 要单独拆分，为了更好的利用强缓存，它基本上不会变
    App.vue + Home.vue + Components 业务代码经常改变，所以要单独切割文件
    比如做了一次升级，如果不拆分，则更新维修时全部都要重新下载，花销大
  
  - lighthouse 
    一个性能打分插件，在性能，无障碍，最佳实践，SEO，打分，并给出问题和优化建议，非常细致
    - 图片大小优化：webp
    - 字体库
    - 渲染屏蔽请求

*性能的关键指标*
  - FCP First Constenful Paint
      首内容绘制（First Contentful Paint, FCP）是衡量网页加载性能的指标，表示浏览器首次渲染出页面内容（如文本、图片等）的时间。
  - LCP Largest Contentful Paint
      最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指标，表示页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。
