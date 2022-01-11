/*
 * @Author: Lee
 * @Date: 2022-01-10 10:26:40
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-11 14:22:16
 */
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { store, key } from './store';
import 'animate.css';
// → 创建应用实例
const app = createApp(App);
// → 注入路由
app.use(store, key);
app.use(router);
// → 挂载
app.mount('#app');

// main.js
// → 页面进入：合并状态
const localState = localStorage.getItem('LOCAL_STATE');
if (localState) {
  console.log('合并Store...');
  store.replaceState(Object.assign(store.state, JSON.parse(localState)));
}
// → 页面刷新：存储状态
window.addEventListener('beforeunload', () => {
  console.log('缓存Store...');
  localStorage.setItem('LOCAL_STATE', JSON.stringify(store.state));
});
