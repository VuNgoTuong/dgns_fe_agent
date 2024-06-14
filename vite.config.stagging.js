import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    outDir: '//10.10.81.131/deloy/APP_DANHGIANHANSU/FE_DGNS',
    emptyOutDir: false,
  },
  server: {
    host: 'dgns.thaco.dev.io',
  },
  resolve: {
    alias: {
      '@Admin': '/src/views/admin',
      '@Store': '/src/store',
      '@Helpers': './src/helpers'
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})