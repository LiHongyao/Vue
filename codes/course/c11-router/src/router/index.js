import Vue    from 'vue'
import Router  from 'vue-router'
import Home    from '@/pages/home'
import Course  from '@/pages/course'
import News    from '@/pages/news'
import About   from '@/pages/about'
import Html    from '@/pages/html'
import Css     from '@/pages/css'
import Js      from '@/pages/js'
import HomeCt1 from '@/pages/home-ct-1'
import HomeCt2 from '@/pages/home-ct-2'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [
      {
        path: '/', // 设置路由路径
        name: 'home', // 设置路由名称
        components: {
          default: Home,
          a:HomeCt1,
          b:HomeCt2
        }
      },
      {
        path: '/course', // 设置路由路径
        name: 'course', // 设置路由名称
        component: Course,
        redirect: '/course/html', // 重定向
        children: [
          {
            path: 'html',
            component: Html
          },
          {
            path: 'css',
            component: Css
          },
          {
            path: 'javascript',
            component: Js
          },
        ]
      },
      {
        path: '/news/:name/:age/:job', // 设置路由路径
        name: 'news', // 设置路由名称
        component: News
      },
      {
        path: '/about', // 设置路由路径
        name: 'about', // 设置路由名称
        component: About,
        alias: '/guanyu', // 设置别名
        props: (route) => ({ query: route.query.q })
      },
    ]
  });