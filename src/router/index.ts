import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/*webpackChunkName: "LoginBox"*/'../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next();
      } else {
        next('/dashboard');
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next('/');
      } else {
        next();
      }
    }
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
