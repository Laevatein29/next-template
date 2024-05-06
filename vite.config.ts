import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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
})
