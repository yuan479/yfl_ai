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

*Next.js*
- Layout metadata
  SEO
- "use client"; 是 Next.js 中的指令，用于标记一个组件为客户端组件，使其可以使用 React 的交互功能（如 useState、useEffect）和客户端特有的逻辑。
- 在 Tailwind CSS 中，[] 表示任意值（Arbitrary Value），允许你直接写入自定义的 CSS 值（如 80vh），会被转换为对应的内联样式，实现灵活布局。
- @ai-sdk/react
  hooks封装chatLLM的功能，方便流式输出

*tailwindcss*
- max-w-3xl 
  响应式的技巧
  48rem（适配）3xl = 768px ipad 竖着的尺寸
  当它是移动设备(phone,pad)的时候，它是width = 100% =100vw
  PC 端 ：768px + mx-auto
  Mobile First 它移动设备优先t

*typescript*
- 组件props 类型定义

*前端部分亮点*
- @ai-sdk/react 对chatBot 响应式业务的封装，一行代码完成流式输出useChat hook
- react-markdown ai 响应 markdown 是主要格式
  # - ![]() 解析
- tialwindcss 适配
- react 组件划分和 ts的类型约束
- shadcn 组件库，按需加载，定制性强
- lucide- react 图标库

*后端亮点*
- ai streamText 流式输出
- result.toDataStreamResponse() 将 streamText 生成的流式结果转换为一个可被前端返回的 Response 对象，支持以数据流的形式传输ai输出，实现
- 爬虫脚本
  - seed 脚本任务
    npm run seed 填充知识库
  - seed.ts 用来编写这个脚本
    但是ts文件不能直接运行
    ts-node +typescript 可以直接运行
    先解析成js，再运行
- langchain Agent 开发框架
  coze promptTemplate 记忆MessageMemory Community 
- 正则html替换
- vercel
- ai-sdk
- js的运动运行环境
- v0 bolt
    ai-sdk
    网页(wikipidia) -> langchain/community +puppeteer(爬取)
    -> langchain分块(chunks?)
    -> supabase(查询)


*遇到的问题*
- ai-sdk 检索的时候，llm 给了老版本的代码，调试出了问题，mcp解决问题
- ts-node 编译时不支持esm
  tsconfig.json ts 配置文件
  支持ts-node commonjs
- rpc 调用
  在supabase 数据库中调用函数