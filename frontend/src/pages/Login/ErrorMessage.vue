<template>
  <div v-if="message" class="text-red-500 text-sm">{{ message }}</div>
</template>
<script setup lang="ts">
defineProps<{ message: string }>()
</script> 