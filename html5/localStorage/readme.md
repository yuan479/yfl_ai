# localStorage  

## 全局安装stylus
- npm install -g stylus
- stylus --version
- stylus -w common.styl -o common.css

## stylus 是什么？
- 一个css预处理器
- 更快，更方便，更强大
- 它会自动编译成css

## stylus 是css的超集
- 浏览器还是只认css
- box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5) 添加盒子立体的感觉
- css 有些属性直接继承
  - 如果每一个元素都写一遍，就会很麻烦
  默认文字大小16px 颜色黑色 
  body color 子元素继承自 body
  但是有些也不会继承
  比如 背景颜色，背景图片，背景位置，背景重复，背景大小

- background-size :cover; 等比例缩放，裁剪，重点在盒子
  contain 重点在背景，一定完整显示背景图片

- 让 css 如js 一样
  - 具有模块特性
  - 用tab缩进 它会帮我们自动补全css 的前缀 
  - 它有模块和作用域的概念
  - 

## view-port user-scalable=no 禁止用户缩放
- 在终端用指令ipconfig 查看电脑ip地址
- 找到 IPv4 地址，然后在浏览器中修改成该地址
- 把当前页面地址发送给手机中，手机就可以访问当前页面
- 移动端 禁止用户缩放