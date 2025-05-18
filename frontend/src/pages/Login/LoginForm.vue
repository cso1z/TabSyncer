<template>
  <form @submit.prevent="onSubmit" class="space-y-6 max-w-md mx-auto mt-32 p-10 bg-white rounded-2xl shadow-2xl border border-gray-100">
    <h2 class="text-3xl font-extrabold text-center text-gray-800 mb-2 tracking-tight">账号登录</h2>
    <p class="text-center text-gray-400 mb-4 text-sm">欢迎使用 TabSyncer，请登录您的账号</p>
    <input v-model="email" type="email" placeholder="邮箱" class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" required />
    <input v-model="password" type="password" placeholder="密码" class="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" required />
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input type="checkbox" v-model="remember" id="remember" class="mr-2 accent-blue-500" />
        <label for="remember" class="text-gray-600 text-sm select-none">记住我</label>
      </div>
      <a href="#" class="text-blue-500 text-sm hover:underline">忘记密码？</a>
    </div>
    <ErrorMessage :message="error" />
    <div class="flex space-x-3 mt-2">
      <button type="submit" class="flex-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition">登录</button>
      <button type="submit" class="flex-1 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition">注册</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import ErrorMessage from './ErrorMessage.vue'

const email = ref('')
const password = ref('')
const remember = ref(false)
const error = ref('')
const mode = ref<'login' | 'register'>('login')
const API_BASE = 'http://localhost:3000'


declare const chrome: any;

async function onSubmit() {
  error.value = ''
  try {
    console.log('[Login] 请求参数:', { email: email.value, password: password.value })
    const url = mode.value === 'login' ? `${API_BASE}/api/auth/login` : `${API_BASE}/api/auth/register`
    const res = await axios.post(url, { email: email.value, password: password.value })
    console.log('[Login] 响应:', res.data)
    localStorage.setItem('token', res.data.token)
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ token: res.data.token }, () => {
        window.location.href = '/main'
      })
    } else {
      window.location.href = '/main'
    }
  } catch (e: any) {
    console.error('[Login] 错误:', e)
    error.value = e.response?.data?.message || `登录失败 ${e}`
  }
}
</script> 