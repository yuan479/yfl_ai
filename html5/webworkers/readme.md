# webworkers
- htnl5 新特性
- 介绍在做复杂、耗费计算性能、时间等任务时，开启多线程。
  浏览器端跑大模型

- js 是一种单线程的语言，跑不起来
  - 不太适合计算
  - 我们推出web worker worker 

- 未来，端模型是一种趋势
  - 在电脑，浏览器，手机，植入（下载）大模型

*api*
  new Worker('./worker.js')
  postMessage
  onMessage //消息监听

*复杂任务：图片的压缩*
  - js不擅长，因为要计算
    把它交给我们的 Worker线程，不影响主线程，可以慢慢做，由浏览器支持做，做完后发个消息通知一下
