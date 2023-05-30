import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // ,server: {
  //   host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址
  //   port: 5000, // 指定开发服务器端口
  //   strictPort: true, // 若端口已被占用则会直接退出
  //   https: false, // 启用 TLS + HTTP/2
  //   open: false, // 启动时自动在浏览器中打开应用程序
  //   proxy: { // 配置自定义代理规则
  //     '/api': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   },
  //   cors: true, // 配置 CORS
  //   force: true, // 强制使依赖预构建
  //   hmr: { // 禁用或配置 HMR 连接
  //     // ...
  //   },
  //   watch: { // 传递给 chokidar 的文件系统监听器选项
  //     // ...
  //   },
  //   middlewareMode: '', // 以中间件模式创建 Vite 服务器
  //   fs: {
  //     strict: true, // 限制为工作区 root 路径以外的文件的访问
  //     allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
  //     deny: ['.env', '.env.*', '*.{pem,crt}'], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
  //   },
  //   origin: 'http://127.0.0.1:8088/', // 用于定义开发调试阶段生成资产的 origin
  // }
})
