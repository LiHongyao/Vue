/*
 * @Author: Lee
 * @Date: 2023-06-06 14:54:43
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 18:05:17
 * @Description:
 */

// -- main.js
// -- 导入创建实例方法
import { createApp } from 'vue';
// -- 导入根组件
import App from './App.vue';
import directives from './directives';
import i18nPlugin from './plugins/i18n';

// -- 创建应用程序实例
const app = createApp(App);

// -- 插件
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!',
  },
});

// -- 自定义指令
directives(app).then(() => {
  // -- 挂载
  app.mount('#app');
});
