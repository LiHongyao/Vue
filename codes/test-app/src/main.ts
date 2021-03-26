/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-07 22:58:33
 * @LastEditTime: 2021-03-11 01:17:44
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /test-app/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 类型定义
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sayHi: any;
  }
}

// App配置/挂载相关
// 1. 创建App
const app = createApp(App);
// 2. 注入
app.use(store).use(router);
// 3. 配置全局属性 -- 访问：在setup函数中通过ctx访问 eg-ctx.$sayHi
app.config.globalProperties.$sayHi = () => {
  console.log('hi');
}
// 4. 挂载
app.mount('#app');