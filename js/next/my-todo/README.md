- npx create-next-app@latest my-todo
  基于create-next-app 创建了一个my-todo next.js 项目
- npx 
  不用先安装，可以直接运行，适合项目的测试
  你的项目想在别人的电脑上运行，可能缺乏环境配置
  不会留下痕迹，不影响全局，不影响其他电脑的环境配置
  npm i -g create-next-app@latest
  尝试一下某种技术的时候，特别有用

  - CSR and SSR
    组件在客户端运行 模板编译，挂载，浏览器（client） SPA 谈不上SEO
    Next.js 服务器端渲染SSR 组件的编译发生在服务器端，SEO非常好
    因为爬虫爬取的是服务器端返回的html ,而 CSR 只有一个#root 
    企业站，SEO ，掘金
