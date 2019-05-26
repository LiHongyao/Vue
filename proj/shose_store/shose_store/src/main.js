// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由
import router from './router'
// 导入状态
import store from "./store"
// 引入axios
import Axios from "axios"
// 配置font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faHome,
  faSearch,
  faUser,
  faShoppingCart,
  faLock,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(
  faHome,
  faSearch,
  faUser,
  faShoppingCart,
  faLock,
  faChevronRight
);

// 引用ElemntUI
import {
  InputNumber,
  TabPane,
  Tabs,
  Radio,
  RadioButton,
  RadioGroup
} from "element-ui"
Vue.use(InputNumber)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)


// 全局配置axios
Axios.defaults.baseURL = 'http://127.0.0.1:8081';
// 将axios挂载到vue实例上
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false


/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  data: {
    title: "在线商城",
    showBack: false,
    showFoot: true
  },
  components: { App },
  template: '<App :title="title" :showBack="showBack" :showFoot="showFoot"/>'
})

// 导航守卫
router.beforeEach((to, from ,next) => {
  // 修改标题
  vm.$data.title = to.meta.title;
  // 修改返回按钮显示状态
  vm.$data.showBack = to.meta.showBack ? to.meta.showBack : false;
  // 修改tabbar状态
  vm.$data.showFoot = to.meta.showFoot ? to.meta.showFoot : false;
  // 判断是否登陆
  if(to.name == "Mine" && !vm.$store.state.loginUser) {
      alert("没有登陆，点击确定前往登陆");
      next("/login");
    return;
  }
    next();
});

