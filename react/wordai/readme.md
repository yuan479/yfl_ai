# 智能前端之单词学习

- 产品和商业模式
  - 学习单词
  - 拍照记单词
    - 把图片交给多模态模型，它能根据照片中的物品生成单词
    - 把图片交给deepseek aigc 例句
    - 火山引擎的 tts 合成发音
  - 首先要 focus 聚焦
    解决拍照背单词，用单词
  - 现在的ai 还在解决一些特定的效率性，创新型App

- npm init vite 
  - vite 是工程化脚手架，构建工具
  - npm install 慢？
    react ... 安装依赖
    换镜像源：npm config set registry https://registry.npmmirror.com
    更快...
    pnpm 代替npm
    我们其实在不同的项目中重复安装了react
    有没有什么能把react等包放到一个地方，如果之前安装过，链接过，只要安装一次

- 项目中一定要安排的技能点
  - pnpm
  - 组件思想
    - 响应式思想
    - 数据状态 useState 
    - 数据驱动
    - 响应式 数据状态变化 视图会自动更新
      - 不用频繁操作DOM，只要关注业务
  - 业务
    - 图片上传
    - 图片预览
  - 组件化设计
    - PictureCard
  - 性能优化
    - linear-gardient 代替图片做背景
  - 用户体验
    - 上传图片的功能，预览
    - 无障碍访问 label for + input#id
  - es6新特性
    - 可选链操作符
  - html5 功能
    - file 文件对象

