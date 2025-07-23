import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  viteMockServe
} from 'vite-plugin-mock'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'//服务器端mock模拟下
//vite前端模拟服务器准备好了插件
//前后端是分离的，不能等后端接口写好了，前端先写起来

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})