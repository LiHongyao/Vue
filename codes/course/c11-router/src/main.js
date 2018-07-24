import Vue from 'vue'
import App from './App'
import router from './router' // 不用加index.js，会自动调用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册路由
  router,
  components: { App },
  template: '<App/>'
})
