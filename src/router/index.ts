import { createRouter, createWebHistory } from 'vue-router'

import { AuthStore } from '@/stores/auth';

import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/',
    component: Dashboard
  },
  {
    name: 'NotFound',
    path: '/not-found',
    component: NotFound
  }
]
})

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/not-found'];
  const authRequired = !publicPages.includes(to.path);
  const auth = AuthStore();

  console.log(authRequired, auth.token, to.path, !router.getRoutes().find(route => route.path === to.path));

  if (authRequired && !auth.token) {
    return '/login'
  }


  if(!router.getRoutes().find(route => route.path === to.path)) {
    return '/not-found'
  }
});

export default router
