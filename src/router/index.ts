import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/review',
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../pages/TheReview.vue'),
  },
  {
    path: '/:notFound(.*)',
    redirect: '/review',
  },
];

export const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
