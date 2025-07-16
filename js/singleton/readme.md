# 单例模式

## 实现Stroage(存储) ,使得该对象为**单例**，基于LocalStorage进行封装，实现方法
  setItem(key, value) 和getItem(key)
  - 题目分析
    - 实现一个Storage类，使得该类的实例为单例
    
    - 设计模式 design pattern
      常用的有三种：单例，工厂，代理
      单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点
      工厂模式：定义一个创建对象的接口，让子类决定实例化哪一个类
      代理模式：为其他对象提供一种代理以控制对这个对象的访问
    - 封装
      类要提供一个getItem 方法，一个setItem方法

## 单例
  - 单例是一种设计模式(static getInatance), 高级程序的交流语言。
  - 一个类只能实例化一次
  - 通过 static 属性 instance 持有唯一的一次实例
  - static getInstance 方法，判断 instance 并返回
    实例的时候一定要这样
  - 性能特别好，好管理

## 实现一个登录弹窗？
  - 用户体验？
    不用跳转路由，而是直接显示在当前页面之上
    涉及： z-index , display: none/block 
  - 性能？
    既然 90%的用户不登陆，但是我们的弹窗有许多内容
    Modal html css js 比较多
    我们把弹窗的显示推迟到第一次使用的时候，单例
    弹窗复用？ 登录，支付？