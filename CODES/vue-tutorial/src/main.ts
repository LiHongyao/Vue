/*
 * @Author: Lee
 * @Date: 2021-12-31 14:14:04
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 18:18:01
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

app.component('button-counter', {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`,
});

// -- 挂载
const vm = app.mount('#app');
