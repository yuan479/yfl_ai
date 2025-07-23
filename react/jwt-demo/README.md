# jwt 登录鉴权
- isLogin .user 全局状态 zustand
- mock 登录模拟
  - apifox api请求模拟，不用写页面，就可以发送请求
    相当于curl 

    -server 种下一个cookie 唯一sid 值 sid =>user
    - 每次请求中 从cookie 读取sid
    - 服务器端就知道是我们了

- 登录和用户鉴权方案 JWT (Json Web Token)
  - {id：112，username：‘帅得惊动党中央’，level:4} 用户json格式的数据
  - 它会通过一种算法，生成一个 hash 串，成为令牌，不会重复
  - token 由服务器端给的令牌
  - 每次请求带上token 
  - decode 解码，得到上面的用户信息

- jsonwebtoken
  jwt 鉴权的库 它提供两个方法
  sign 颁发token  user ，secret
  decode secret 验证token 得到 user 信息
  - pnpm i jwt
  - import jwt from "jsonwebtoken";
  - sign 
  - 用户每次鉴权都要通过http的请求头 Authorization 带上token
  - Cookie不安全，它是明文的，Cookie每次都自动带上，
  - token 需要手动设置


- 加盐
  secret
  传递token 前面会加上Bearer ${token} 持有者
  通过 http headers Authorization 

- 前端的用户权限 流程
  - zustand 登录、user  useUserStore
  - 登录页面
    受控/非受控组件
  - 路由守卫