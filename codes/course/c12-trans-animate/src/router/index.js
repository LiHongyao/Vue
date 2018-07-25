import Vue from 'vue'
import Router from 'vue-router'
import TransAnim from '@/components/trans-anim'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TransAnim',
      component: TransAnim
    }
  ]
})
