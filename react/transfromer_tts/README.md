# React Transformer TextToSpeech

*transformer*
  transformer.js JS AI 机器学习库
  来自于 huggingface (全球最大开源大模型社区)
  将模型下载到浏览器端，js开发者未来的智能战场

*项目亮点*
  - 使用teansformer.js 的浏览器端模型
  - 使用tailwindcss 原子化css 几乎不需要写样式了
    类名文档语义很好，特别适合AI生成
    高效解决适配 w-full + max-w-xl
  - webworker nlp 任务
    1. 延迟加载大模型，先渲染页面
    2. 在实现组件后再实例化，有利于性能
    3. 卸载时移除事件
  - 封装组件

*项目难点*
  - 