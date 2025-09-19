# 进阶跨域方案 cors

*日常用得最多的跨域解决方案*
    
  - 浏览器会发送CORS 请求，如果服务器端的响应头设置了Access-Control-Allow-Origin
    后端实现了CORS ，可以跨域
  - * : 白名单

  - 简单跨域请求
    GET/POST/HEAD 简单设置下Access-Control-Allow-Origin 就好
    Content-Type text/plain multipart/from-data 
    application/x-www-form-urlencoded

  - 复杂跨域请求
    其他的安全方法 安全升级，一分为二
    - 预检请求
      给一个200
      Access-Control-Allow-Methods
      Access-Control-Allow-Headers
      ...
      METHOD OPTIONS
    - 真正的请求
