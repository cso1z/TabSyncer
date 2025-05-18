<template>
  <div class="flex justify-center mt-4">
    <button class="btn flex items-center bg-white border border-gray-200 shadow-md hover:shadow-lg px-4 py-2 rounded-lg w-full max-w-xs transition group focus:outline-none focus:ring-2 focus:ring-blue-400" @click="loginWithGoogle">
      <img src="/google-logo.svg" alt="Google" class="w-6 h-6 mr-3" />
      <span class="text-gray-700 font-semibold group-hover:text-blue-600 transition">使用 Google 账号登录</span>
    </button>
  </div>
</template>

<script setup lang="ts">
function loginWithGoogle() {
  window.location.href = 'http://localhost:3000/api/auth/google'
}
</script>

<style scoped>
.btn:active {
  transform: scale(0.97);
  box-shadow: 0 2px 8px 0 #cbd5e1;
}
</style> 