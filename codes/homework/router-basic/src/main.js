// 1. 引入 vue
import Vue from 'vue'
// 2. 引入 App 组件
import App from './App'
// 3. 引入router，无需指定 index.js，默认加载
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 4. 注入router
  router,
  components: { App },
  template: '<App/>'
});
