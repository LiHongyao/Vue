/*
 * @Author: Li-HONGYAO
 * @Date: 2021-04-20 11:12:36
 * @LastEditTime: 2021-04-20 15:23:12
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \test-app\src\main.js
 */
import { createApp } from "vue";

// 引入根组件
import App from "./App.vue";
// 创建app实例
const app = createApp(App);
// 全局过滤器/方法
app.config.globalProperties.$filters = {
  addSymbols: (value) => `¥${value.toFixed(2)}`,
};
// 挂载到DOM上（#app)
app.mount("#app");
