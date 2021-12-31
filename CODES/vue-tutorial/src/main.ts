/*
 * @Author: Lee
 * @Date: 2021-12-31 14:14:04
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-31 15:16:34
 */
// -- 导入创建实例方法
import { createApp } from 'vue';
// -- 导入根组件
import App from './App.vue';

// -- 创建应用程序实例
const app = createApp(App);
// -- 挂载
const vm = app.mount('#app');

