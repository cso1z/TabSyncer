import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { LoginForm } from './pages/Login'
import { defineAsyncComponent } from 'vue'

const MainPage = defineAsyncComponent(() => import('./pages/MainPage.vue'))

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginForm },
  { path: '/main', component: MainPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router 