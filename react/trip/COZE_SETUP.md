# Coze API 配置说明

## 环境变量配置

在项目根目录创建 `.env` 文件，并添加以下配置：

```env
# Coze API 配置
VITE_PAT_TOKEN=your_coze_pat_token_here
```

## 获取 PAT Token

1. 登录 Coze 平台 (https://www.coze.cn)
2. 进入个人设置页面
3. 找到 "API 访问" 或 "Personal Access Token" 选项
4. 生成新的 PAT Token
5. 将 Token 复制到 `.env` 文件中

## 常见错误解决

### 错误 5000: Internal server error

可能的原因：
1. PAT Token 无效或过期
2. 工作流 ID 不正确
3. 参数格式错误
4. 文件上传失败

### 调试步骤

1. 检查控制台输出的调试信息
2. 确认 PAT Token 已正确设置
3. 验证工作流 ID 是否正确
4. 检查网络连接是否正常

## 工作流配置

确保您的工作流已正确配置以下参数：
- picture: 图片文件 ID
- style: 风格选择
- uniform_number: 队服编号
- uniform_color: 队服颜色
- position: 位置
- shooting_hand: 持杆方式 