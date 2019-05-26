import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Search from '@/pages/search'
import ShoppingCart from '@/pages/shopping-cart'
import Mine from '@/pages/mine'
import Login from '@/pages/login'
import Details from '@/pages/details'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title:"在线商城", showFoot:true}
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {title:"", showFoot:true}
    },
    {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart,
      meta: {title:"购物车", showFoot:true}
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {title:"个人中心", showFoot:true}
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {title:"详情", showBack: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {title:"登陆", showBack: true}
    }
  ]
})
