# phoneGTP

- chatbot
    组件、tailwindcss 、messages
    ai streaming 比较复杂 封装？
    大模型
- 专业领域的chat bot
  - RAG 手机知识库 用来检索增强生成（RAG）
  - 爬虫作为知识库
  - 向量数据库（embedding）、supabase

*项目中用到的技术*
- RAG 检索增强生成
  - embedding openai embed 向量化
  - 相似度 cos值趋向于 1 倒序
  - 存到supabase 数据库中

**package.json依赖**
- ai sdk
- build AI-powered applications
  封装了LLM 的调用
  @ai-sdk/openai 调用 LLM
  @ai-sdk/react hooks api 式一行完成流式输出

- supabase
  BASS Backend as Service 把后端作为一个接口服务调用
  Postgres 支持向量数据库

- langchain
  LangChain 是一个用于构建 AI 应用的框架，它连接大模型、数据源和工具，简化了从提示工程到链式调用、记忆管理和代理决策的开发流程。
- @langchain/community 社区提供的工具（爬虫）
- @langchain/core 核心模块
- dotenv
- puppeteer 无头浏览器
  Puppeteer 是一个 Node.js 库，用于控制无头浏览器（如 Chrome），可自动化网页操作，如截图、爬取数据、测试交互等。
- lucide-react  是一个轻量、开源的 React 图标库
- react-markdown 是一个React组件，用于渲染Markdown 文本