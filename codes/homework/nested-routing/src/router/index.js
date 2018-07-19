import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Course from '@/components/course'
import Teachers from '@/components/teachers'

import HTML from '@/components/pages/html'
import CSS from '@/components/pages/css'
import JavaScript from '@/components/pages/javascript'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      // 重定向
      redirect: '/course/html',
      // 二级路由
      children: [
        {
          path: 'html',
          name: 'html',
          component: HTML
        },
        {
          path: 'css/:msg',
          name: 'css',
          component: CSS
        },
        {
          path: 'javascript',
          name: 'javascript',
          component: JavaScript
        }
      ]
    },
    {
      // 动态路径参数 以冒号开头
      path: '/teachers/:name/:course',
      name: 'teachers',
      component: Teachers
    }
  ]
})
