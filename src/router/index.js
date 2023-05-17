import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('@/views/OverviewPage.vue')
    },
    {
      path: '/',
      name: 'skills',
      component: () => import('@/views/SkilsPage.vue')
    },
    {
      path: '/',
      name: 'projects',
      component: () => import('@/views/ProjectsPage.vue')
    },
    {
      path: '/',
      name: 'contact',
      component: () => import('@/views/ContactPage.vue')
    },
  ]
})

export default router
