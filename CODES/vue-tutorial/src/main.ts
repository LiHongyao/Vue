/*
 * @Author: Lee
 * @Date: 2021-12-31 14:14:04
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 08:35:47
 */
// -- 导入创建实例方法
import { createApp } from 'vue';
// -- 导入根组件
import App from './App.vue';
import 'animate.css';
// -- 创建应用程序实例
const app = createApp(App);
// -- 自定义指令
app.directive('highlight', {
  mounted(el, binding, vnode) {
    console.log(el, binding, vnode);
    el.style.color = binding.value || 'orange';
  },
});
// -- 挂载
const vm = app.mount('#app');
