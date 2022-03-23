/*
 * @Author: Lee
 * @Date: 2021-12-31 14:14:04
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 19:18:26
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // +++
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  },
  // +++
});
