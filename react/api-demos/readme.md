# 全栈开发

## 表演型项目
  - 前端 React 
  - mockjs 前端伪接口
    /api axios
  - 后端 java/ node / go

## vite-plugin-mock
  - mock
    前端在后端给出真实接口前，需要mock一下，前端自己造接口
    - vite-plugin-mock 插件
    - mock 服务启动
    - mock下新建文件 /mock/test.js 根目录下
        export default [
        {
            url: '/api/todos',
            method: 'get',
            response: () => {
                return{
                    code:0,
                    data:todos,
                }
            }
        }]