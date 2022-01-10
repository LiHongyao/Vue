/*
 * @Author: Lee
 * @Date: 2022-01-10 10:26:40
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-10 15:32:23
 */
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import 'animate.css'
// → 创建应用实例
const app = createApp(App);
// → 注入路由
app.use(router);
// → 挂载
app.mount('#app');
