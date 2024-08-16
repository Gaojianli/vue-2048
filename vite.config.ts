import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'



// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.vue', 'src/**/*.ts'],
      outDir: 'dist/types',
      staticImport: true,
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: 'src/App.vue',
      name: 'vue-2048',
      fileName: (format) => `vue-2048.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
