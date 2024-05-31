import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import { scripts } from './src/scripts'

const { generateCode } = scripts

export default defineConfig({
  plugins: [
    react(),
    generouted(),
    generateCode(),
  ],

  css: {
    // add global css variables and mixins
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
    },
  },
})
