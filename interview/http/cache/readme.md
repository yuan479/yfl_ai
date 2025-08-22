# 缓存

*URL输入到页面显示*

- 知识体系
- 多进程多线程架构是前提
- 输入网址并DNS解析
  
  https://www.example.com:443/path/to/page?param1=value1&param2=value2#section1
  - 组成：
      协议：https:// - 决定使用HTTP还是HTTPS
      域名：www.example.com - 需要DNS解析
      端口：:443 - HTTPS默认端口（HTTP默认80）
      路径：/path/to/page - 服务器上的资源路径
      查询参数：?param1=value1&param2=value2 - 传递给服务器的参数
      锚点：#section1 - 页面内跳转位置

  - http(s)
  - web 80 nginx proxy 代理3000端口
    http 协议向443端口请求，对ip地址
  - 非结构字符串，搜索关键字

- 浏览器解析协议、主机、端口路径等，并**构造**一个http请求

  - 发送请求前，浏览器根据请求头的expires 和 cache-control 判断是否命中强缓存策略
    例如：访问https://www.baidu.com.index.js +请求头
    缓存文件 + 请求头 会放在一起，就像是这个文件的属性

  **强缓存**
    Expires 过期时间，http 1.0的产物，通过获取过期时间减去系统时间得到时间戳，可能不准
    cache-control，http 1.1，通过倒计时，
    响应头cache-control + 文件本地缓存，在过期时间范围内，不用请求，直接用本地缓存内容

  **协商缓存**
    当强缓存过期，没有命中，这个资源在服务器端也不一定修改了，怎么交接一下

    

  **Cookie**
    url 背后的 请求行、请求头、请求体
    同一主机的不同端口，对应的是不同的程序或服务
    DNS -> ip地址 80 -> http 443 https ，3306 mysql
  - 补全 url
    例如输入：baidu.com 会自动补全
    如果是：http://www.baidu.com 不安全
    会 307跳转， Location:https://www.baidu.com/ 再请求一次
    状态码：让浏览器知道接下来要干什么？
    - 301：Moved Permanently      永久移动 ，只支持GET请求，不是GET改成GET
    - 302：Found Moved Temporary  临时移动 ，只支持GET请求，不是GET改成GET
    - 307：Temporary Redirect     临时重定向 ，各种方法，不会改
    - 308：Permanent Redirect     永久重定向 ，各种方法，不会改


    