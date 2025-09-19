# 团队上线了一张用户头像图片，放在CDN上加速，后来更新了文件头像之后，但前端刷新页面后，用户依旧看到的是旧头像

前端 (localhost:5173) 
    ↓ 发起请求: fetch('/api/user')
Vite 开发服务器 (localhost:5173)
    ↓ 检测到 /api 前缀，触发代理
    ↓ 转发请求到: http://localhost:3000/api/user
后端服务器 (localhost:3000)
    ↓ 处理请求，返回 JSON 数据
    ↓ 响应: {id:1, name:'张三', role:'admin'}
Vite 开发服务器
    ↓ 将后端响应转发给前端
前端
    ↓ 接收到数据，解析 JSON