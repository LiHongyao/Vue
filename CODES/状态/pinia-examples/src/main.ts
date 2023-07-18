/*
 * @Author: Lee
 * @Date: 2023-06-13 20:03:51
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-14 00:09:22
 * @Description:
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useAppStore } from './stores';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');

// 👉 持久化pinia
const store = useAppStore();
// 页面进入：合并状态
const localState = localStorage.getItem('PINIA_PERSISTENCE');
if (localState) {
  console.log('[温馨提示]：合并Store...');
  store.$state = JSON.parse(localState);
}
// 页面刷新：存储状态
window.addEventListener('beforeunload', () => {
  console.log('[温馨提示]：缓存Store...');
  localStorage.setItem('PINIA_PERSISTENCE', JSON.stringify(store.$state));
});
