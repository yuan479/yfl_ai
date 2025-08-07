# 面试热题 跨域

*前后端联调*
  - 前后端分离 跨域问题
  - 前端 5173
    - from origin 
  - 后端 8080
    - server 
 
  - 同源
    - protocol://domain.port 都要一样
    **域名不一样，不是同一个来源**
    - http://localhost:5173 --> http://www.baidu.com/api/user 
    **协议不同也不同源，为什么这么严格？**
    - http://localhost:5173 --> http://localhost:5173/api/user
    **cross origin（跨的是origin）**
    - http://localhost:5173 --> http://localhost:8080/api/test
    origin = http(s) + domain + 端口

   - CORS policy 同源策略
     **Cross-Origin Resource Sharing**跨源资源共享
     跨域了，CORS 将会block 请求


*大前端*
  - React/Vue 都基于MVVM前端开发
  - node.js做后端
  - 移动端(ios/android)
  - 桌面端 exe vscode 用ts 写的
  - 嵌入式 ，AI

*为什么要学跨域*
  - 现在的开发形式是前后端分离，端口或域名不一样
  - CORS Policy 同源策略？
  - 跨域请求被block掉了
    - 请求到达了服务器端吗？  到达了，但是被抛弃了响应
    - 浏览器的CORS策略 浏览器的机制
  - 安全问题？
    - 先是前端(用户)安全 防止被攻击
    - 跨源的不一定被信任
  - 怎么解决跨域？
    - 即拿到cross origin的资源，同时又不违反CROS的机制
    - fetch/xhr 请求一个跨源的资源的时候，被CROS管着了
    - Cookie/localStorage 也被CROS管着了
    - 什么可以跨域请求不触发？
      - img ， script link 可以跨域
      - 不用被管着的fetch /xhr / axios ，用script

*使用script的跨域解决方案 JSONP*
  - script src 发送请求
    - 请求得是 get请求
    - 返回是javascript 返回
    - 但是前端想要的是json ,而且还要能继续执行，用函数可以实现：
      - 在前端埋一个函数，后端返回一个js函数的执行，在执行的时候将数据传给函数
    - 需要后端的配合，
  - 返回一个JSON
  - JSON:前端需要后端提供的JSON数据
  - P：padding

*JSOPN 利用了script 可以跨域访问*
  - 前端使用script src=跨域的资源请求地址
  - 前后端配合，返回的json 外面包含着函数
  - 页面上有个函数在等待执行
  - 这个方法略显复杂，能否封装一下？

*手写JSONP*
  - 后端配合解析 script url get 请求中的callback 参数值
    请求A 请求B...
  - 为什么要JSONP请求，因为要获取动态数据
    script标签原本是用来设计加载静态JS
  - 前端封装
    
