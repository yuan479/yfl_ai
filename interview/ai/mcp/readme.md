# mcp
- function call
   可以让LLM突破自身知识和能力的局限，可通过调用外部api来获取实时信息，执行计算或操作，从而获取最新数据精确计算与外部系统交互的复杂任务
- mcp (Model Context Protocaol)
  是一个协议，web开发中的Restful 协议，如何将外部资源暴露给LLM的协议和编程风格。
  是Function call 的升级版

  在做各种Function call 有点乱的时候，mcp统一了一切风格和规范

  mcp 是LLM与外界之间的通信协议，他就像USB，llm训练完后不了解的知识

  LLM本身不知道怎么调用地图，数据库，搜索引擎，MCP规定了标准上下文交换方式，让模型能像调用API一样去访问外部能力

  ## 举例
    高德地图MCP，请帮我规划学校到机场的路线。
    模型根据高德地图MCP插件，获取实时的路径和交通数据
  ## 意义
    - LLM的输出更可靠
    - 降低集成成本（将自有系统和LLM集成）
    - 数据安全可控

- 安装mcp 客户端
- 高德地图keyAPI

## mcp的使用
- server是基于mcp协议的服务器软件
  定义tool
- LLM
- mcp client cline/sursor
  配置mcp server
- LLM->cline->server Transport 通信
