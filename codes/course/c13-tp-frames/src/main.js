// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {
  Button,
  Carousel,
  CarouselItem
} from 'element-ui'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import iView from 'iview';
Vue.use(iView);

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)


Vue.config.productionTip = false
Vue.component('Hello', {
  template: '<h1>Hello, ChengDu!</h1>'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
