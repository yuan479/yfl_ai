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
  sign 颁发token  user
  verify 验证token  user
  - pnpm i jwt
  - import jwt from "jsonwebtoken";
  - sign 