import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import PropertyView from '../views/ProptrtyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Info',
      name: 'info',
      component: InfoView
    },
    {
      path: '/property',
      name: 'property',
      component: PropertyView
    },
   
  ]
})

export default router
