// -- 导入创建实例方法
import { createApp } from 'vue';
// -- 导入根组件
import App from './App.vue';

// -- 创建应用程序实例
const app = createApp(App);
// -- 挂载
const vm = app.mount('#app');
console.log(vm);
