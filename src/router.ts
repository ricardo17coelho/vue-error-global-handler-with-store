import { createRouter, createWebHistory } from 'vue-router'
import { useErrorStore } from '@/stores/error'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/about', component: () => import('@/views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  console.warn('beforeEach')
  // ############ CLEAR ERROR IF EXISTS #########
  const errorStore = useErrorStore()
  if (errorStore.isError) {
    console.warn('should clear the error store')
    errorStore.isError = false
    errorStore.error = undefined
  }
})

export default router
