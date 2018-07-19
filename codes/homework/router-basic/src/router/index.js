// 1. 引入vue
import Vue from 'vue'
// 2. 引入路由
import Router from 'vue-router'
// 3. 引入页面
import Home   from '../components/home/home.vue'
import News   from '../components/news/news.vue'
import Social from '../components/social/social.vue'
import About  from '../components/about/about.vue'

// 4. 安装路由
Vue.use(Router)
// 5. 配置路由
export default new Router({
  routes: [
    {
      path: '/',      // 路由访问路径，‘/’表示当前目录
      name: 'home',   // 路由名称
      component: Home // 路由指向的组件
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/social',
      name: 'social',
      component: Social
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});

