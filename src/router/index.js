import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import PropertyView from '../views/ProptrtyView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import ProjectView from '../views/ProjectView.vue'

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
    {
      path: '/documents',
      name: 'documents',
      component: DocumentsView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
   
  ]
})

export default router
