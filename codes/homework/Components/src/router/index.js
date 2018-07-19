import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LazyLoad from '@/components/LazyLoad'
import HelloREM from '@/components/HelloREM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloREM',
      component: HelloREM
    }
  ]
})
