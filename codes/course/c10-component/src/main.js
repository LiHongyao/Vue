// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 关闭生成模式提示信息
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {},
  // 组件注册
  components: { App },
  template: '<App/>'
})
