import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import GlobalLayout from '@/layouts/GlobalLayout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: GlobalLayout,
    redirect: '/platformManager',
    children: [
      {
        path: '/platformManager',
        name: 'platformManager',
        component: () => import(/* webpackChunkName: "platformManager" */ '@/pages/PlatformManager/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
