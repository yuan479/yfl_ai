# 秋招面试

*js*
- Object.assign()
- 深浅拷贝
- ‘=’：js内存相关
- 拷贝（简单数据类型 相当于复印了一份） 和引用式赋值

*响应式底层*
- Object.defineProperty()
- Proxy()

*Git*
安装开发环境
- node
- git 环境 开源的分布式版本管理软件
- 公司会发放一个git 账号，私有项目
开发中如何使用git?
- git config -global user.name ""
  git config -global user.email ""
- 入职 git clone 公司代码
  - 主分支 main/master
    所有人都在用的，线上分支
  - 开发新分支
    在自己的工作任务分支
    git checkout -b xxx 创建分支并切换
    git checkout main 切换到主分支
  - 常用命令
    git pull origin main
    git status 当前git 状态
    git log --oneline 查看提交记录
    git commit -m "" 提交代码
    git push origin xxx 推送代码
    git checkout xxx 切换分支
    git branch -d xxx 删除分支
  - 场景
    - 回退
      git restore --staged xxx 取消暂存


  