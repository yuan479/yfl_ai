# 智能前端之图片

- StrictModel react 默认启动严格模式
  - 执行一次，测试一次，所以最后输出两次
  - 良好的编程风格，移除不必要的代码
  - import.meta.env.VITE_API_KEY 环境变量对象
    代码可以和环境变量交互
    把env写在代码里
  - async await
    为什么需要？
    异步任务同步化，控制任务流程
    之前我们用.then,但是await 比then 更同步化，更简单

  - class 是js 的一个关键字
    - react jsx 运行以原生js 运行
    className 代替 class
    无障碍访问 label htmlFor +input#id

  - 本地预览 preview
    - 良好且必须的用户体验，实时告知用户在发生什么
    - 图片上传及处理挺慢的，所以需要preview
      e.target.files[0] 拿到上传的文件
      创建FileReader实例
      readAsDataURL 把文件转成base64
        - data? base64数据
        - 拿到 base64 图片的一种编码方式，可以直接当作图片的src

  - 静态的html -> 动态模板 {data} ->状态 State useState