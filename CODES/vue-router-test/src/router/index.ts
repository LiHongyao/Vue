/*
 * @Author: Lee
 * @Date: 2022-01-10 11:27:30
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-10 17:35:57
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// typings.d.ts or router.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    isAuth?: boolean /** 可选属性 */;
    title: string /** 每个路由必须声明 */;
  }
}

import Home from '../pages/Home/index.vue';

// → 定义路由
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../pages/News/index.vue') /** 懒加载 */,
    meta: { title: '新闻' },
  },
  {
    path: '/web',
    redirect: '/web/html',
    component: () => import('../pages/Web/index.vue'),
    meta: { title: 'Web' },
    children: [
      { path: 'html', component: () => import('../pages/Html/index.vue') },
      { path: 'css', component: () => import('../pages/Css/index.vue') },
      { path: 'js', component: () => import('../pages/JavaScript/index.vue') },
    ],
  },
];

// → 创建路由

const router = createRouter({
  history: createWebHistory() /** 创建基于history模式的路由 */,
  routes,
});

// -- 前置守卫
router.beforeEach(async (to, from) => {
  console.log('__beforeEach__');
  // → 检测登录状态
  // if (to.path !== '/login' && !localStorage.getItem('loginStatus')) {
  //   return '/login';
  // }
});
// -- 解析守卫
router.beforeResolve(async (to, from) => {
  console.log('__beforeResolve__');
});

// -- 后置钩子
router.afterEach(async (to, from) => {
  console.log('__afterEach__');
  document.title = to.meta.title as string;
});

// → 导出路由
export default router;
