# 爬取数据

x-crawl 是一个灵活且功能强大的 Node.js 多功能爬虫库，支持页面、接口和文件的抓取，并集成了 AI 辅助功能以智能应对反爬机制和优化爬取策略。

*爬取流程*
1. 发送http请求得到html
2. 正则筛选数据 后端写法
3. css querySelector
    在内存中将 html字符串渲染为 DOM树，x-crawl支持在内存的 DOM树中使用 querySelector语法查找
4. ai 辅助
    ai分析dom树，我们只要用prompt描述我们需要的内容，ai可以代替我们和内存dom树沟通

- puppeteer 无头浏览器
  