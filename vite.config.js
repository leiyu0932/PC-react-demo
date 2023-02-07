import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // proxy: {
  //   '/api': {
  //     target: 'http://xxxx.com',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, '')
  //   }
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
})
