# hash 冲突怎么解决？

- 强缓存 & 协商缓存

*强缓存*
  Cache-Control：max-age=
  假如有一个节日活动，活动要修改，编译，上线
  假设文件都叫index.js
  强缓存不用请求，怎么更新？

   npm init -y
    pnpm i webpack webpack-cli webpack-dev-server -D
    pnpm i babel-loader @babel/core @babel/preset-env @babel/preset-react @babel preset-typescript -D

*bundle.[hash].js*
  静态文件如何更新？
  使用hash 表达不同的版本，强制用户读取新文件
  hash 的设置，可以即强缓存又随时更新    

*js css code splite*

*react react-dom react-router libs 单独打包*
  每次更新只需要重新打包修改的文件，而不用全部打包
