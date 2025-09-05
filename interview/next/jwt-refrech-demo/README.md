# next.js 全栈项目

- users & posts
- jwt 双token 鉴权
- 虚拟列表
    ai爬虫 爬取掘金100条数据
- 大文件上传
- ai 工程化
    流式输出
    function Tool
    mcp
- ai 搜索
- prisma 初始化
    orm 工具
    object relation mapping
    User(表) =》 User类
    orm把底层基于数据库的操作做一个映射成为高级的面向对象操作
    一行  =》新建实例 new User()

*双token*

单token localStorage 长期使用，容易被第三方拦截，不安全
双token
安全 + 无感刷新登录
- 一个是accessToken ，用于校验身份，重要，时间有效期短，以小时为单位，存在cookie里面
  缺点：
    过期怎么办？
- refetchToken 七天或半个月，刷新时间更长，不容易过期
  用refetchToken 发到服务器的/api/suth/refetch，返回新的accessToken 做到无感刷新
  如果refetchToken 也过期，重新登录

*开发流程*

Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，用于生成类型安全的数据库客户端。
  数据库的设计图
  navite 好的地方，schema + git 留下数据库设计和修改的历史
  它是文档型的，可以追踪。

- Model 表的映射模型
    @@map("users")  指定模型对应的表名
    posts  Post[]  构建一个一对多的关系
    createdAt updatedAt prisma  自动维护
    @id  主键
    @unique  唯一索引
    Model User {
        colusmns name type @default
        索引
        relation
    }

    migration 迁移，生成一条迁移记录

- restful API 方法和资源暴露的一种模式
- lib 复用的 js模块放在该目录下
- 正则
    前端，后端都要会regexp
    / / 格式
    ^ $ 开始和结束
    . 任意字符
    + 一次或多次
    ? 0次或一次
    [] 匹配范围
    {} 匹配长度
- bcryptjs 加密js 模块，单向加密算法(不能解密)
    注册时加密一次，每次登录password 再加密一次
    比较的是加密后的字符串是否一样
- 状态码：
    


*middleware 中间键*
  用于在请求和响应之间执行预处理操作
  添加中间键或添加一个白名单
  /dashboard
  Middleware 是中间件，用于在请求和响应之间执行预处理逻辑，如日志、认证、数据解析等。
  - 配置一个需要登录的页面数组
  - 送么startWith
  - response.next() 放行
  - response.redirect() 跳转

  - 通过jwt verify 方法拿到payload 后，添加了自定义的请求头x-user-id
    后续页面就可以拿到这个值

- JWT 的构成
    - 头部：
        签名算法HS256
    - 载荷：
        {userId:...}
    - 签名：
        secretKey
- 后端安全和性能
    - 容错处理
      try{}catch(){}finally{}
    - 释放数据库对象
- peisma client 的CRUD方法
    prisma.user.create()
    prisma.user.findUnique()
    prisma.user.update({
        where:{},
        data:{}
    })

 *大文件上传*
 当文件比较大的时候，由于各种原因，容易失败，而且上传慢
 一旦失败，要重新上传，体验差

 采用分片上传策略(并发，限流)，将文件切分为多个小块并行上传，提升稳定性和效率，上传前通过web worker 计算文件整体以及分片的hash，向服务器校验，若文件已经存在则直接妙传。前端记录上传进度和成功分片，支持断点续传，避免重复上传，服务器按序接受分片，存储后进行合并，并检验最终文件的完整性，结合唯一标志和分片索引，确保上传可靠，整个过程配合进度条和错误重试机制，提升用户体验及系统健壮性

*worker hash计算*
上传文件的处理函数 handleFile 使用useCallback 缓存，避免重复创建

- typescript 的使用
    - 主线程和worker线程间的通信，数据约定
    HashWorkerIn
    HashWorkerOut
    as 断言

*merge 合并流程*
- fileHash 传入
- 