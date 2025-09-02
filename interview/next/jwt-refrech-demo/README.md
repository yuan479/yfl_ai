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
