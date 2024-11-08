import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import AutoImport from 'unplugin-auto-import/vite'
import { MuiResolver } from 'unplugin-react-components'
import Components from 'unplugin-react-components/vite'
import { scripts } from './src/scripts'

const { generateCode } = scripts

export default defineConfig({
  plugins: [
    react(),
    generouted(),
    generateCode(),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: './auto-imports.d.ts',
      dirs: ['src/components'],
    }),
    Components({
      resolvers: [MuiResolver()],
      dts: true,
    }),
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
