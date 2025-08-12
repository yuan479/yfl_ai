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
  - 单例模式封装 MyTextToSpeechPipeline
  - getInstance 只实例化一次
  - 懒执行：需要时才创建，或模块加载时直接创建
  - Promise.all + nlp 流程的理解 （tokenizer，module，vocoder）

- audio 标签的url  <-- Object.createObjectURL(blob) <--二进制数据位<--ttsModel生成<--input_ids(tokenizer分词) + speaker_embeddings(音色) +vocoder(合成器)
- blob 二进制文件
- Object.createObjectURL 根据文件返回一个本地浏览地址
  大模型不会负责给你全局访问的地址
- Object.createObjectURL(blob) 是一个用于创建一个唯一URL 该URL 可以引用由浏览器内部生成的对象（如Blob对象）的方法，常用于在浏览器中临时显示或下载文件。

