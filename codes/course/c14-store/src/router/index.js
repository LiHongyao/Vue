import Vue         from 'vue'
import store       from '../store'
import Router      from 'vue-router'
import Home        from '@/pages/home'
import Search      from '@/pages/search'
import ShoppingCar from '@/pages/shoppingcar'
import Mine        from '@/pages/mine'
import Details     from '@/pages/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle', '主页');
        store.commit('changeLeft', '0');
        next();
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle', '搜索');
        store.commit('changeLeft', '25%');
        next();
      }
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: ShoppingCar,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle', '购物车');
        store.commit('changeLeft', '50%');
        next();
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle', '我的');
        store.commit('changeLeft', '75%');
        next();
      }
    },
    {
      path: '/details/:msg',
      name: 'details',
      component: Details,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle', '详情页');
        next();
      }
    }
  ]
})

