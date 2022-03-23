import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

const pathResolve = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://dev.api.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue']
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/scss/variables.scss";
        @import "./src/assets/scss/mixin.scss";
        `
      }
    }
  }
});
