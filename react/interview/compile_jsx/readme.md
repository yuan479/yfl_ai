- jsx ? 
   - jsx 不能独立运行
   - 它的运行依托于工程化工具 如vite
     - 它将jsx 转换为 React.createElement 
  

  - bable
    Make JavaScript Great Again！
    大胆使用js最新语法，不用等待
    比如在es6 里面有promise -> es8 里有async await 
    bable 能把let -> var ，箭头函数{}=>{} -> function(){}
    本质是降级

## 编译的流程
  - pnpm i @babel/cli @babel/core -D
  - @babel/cli babel的命令行工具，用来编译js文件
  - ！babel/core babel的核心库，用来编译js文件，提供api
    babel 负责编译js文件，但是不能编译jsx文件，需要插件来支持
  - -D 开发阶段的依赖 dev 上线后是不用的
  - ./node_modules/.bin/babel
    在转换之前，要先配置一个转换的规则
    react -> IOS 代码
    - es6 -> es5
    - 将 jsx 转变为 react.createElement
