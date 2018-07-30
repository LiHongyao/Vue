import Vue from 'vue'
import Router from 'vue-router'
import Directive from '@/components/directive'
import ElementUI from '@/components/c-element-ui'
import Swiper from '@/components/c-swiper'
import LazyLoad from '@/components/c-lazyload'
import IView from '@/components/c-iview'
import Echarts from '@/components/c-echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/element',
      name: 'ElementUI',
      component: ElementUI
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/lazyload',
      name: 'LazyLoad',
      component: LazyLoad
    },
    {
      path: '/iview',
      name: 'IView',
      component: IView
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    }
    
  ]
})
