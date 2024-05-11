import path, { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'

export default defineConfig({
  base: './',
  root: path.join(__dirname, 'src'),

  plugins: [react(), generouted()],

  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "./src/assets/styles/main.scss";
          `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@api': resolve(__dirname, './plugins/api'),
    },
  },
})
