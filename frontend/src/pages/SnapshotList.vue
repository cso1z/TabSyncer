<template>
  <div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 tracking-tight">快照管理</h2>
    <div class="mb-4 flex gap-2 justify-end">
      <button @click="refresh" class="px-4 py-1 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 shadow-sm transition">刷新</button>
      <button @click="batchDelete" :disabled="!selected.length" class="px-4 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 shadow-sm transition disabled:opacity-50">批量删除</button>
    </div>
    <div v-if="!snapshots.length" class="text-gray-400 text-center py-10">暂无快照</div>
    <div v-for="snap in snapshots" :key="snap.id" class="group border p-4 mb-4 rounded-xl shadow hover:shadow-lg flex items-center transition bg-gray-50 hover:bg-blue-50">
      <input type="checkbox" v-model="selected" :value="snap.id" class="mr-3 accent-blue-500" />
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-lg truncate">{{ snap.name || '未命名快照' }}</span>
          <span class="text-xs text-gray-400">{{ snap.group || '未分组' }}</span>
        </div>
        <div class="text-xs text-gray-400 mt-1">{{ snap.createdAt }}</div>
      </div>
      <div class="flex gap-2 ml-4">
        <button @click="rename(snap)" class="px-3 py-1 rounded bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200 text-sm shadow-sm transition">重命名</button>
        <button @click="del(snap.id)" class="px-3 py-1 rounded bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 text-sm shadow-sm transition">删除</button>
        <button @click="openTabs(snap)" class="px-3 py-1 rounded bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 text-sm shadow-sm transition">打开所有页面</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
declare const chrome: any;
import { ref, onMounted } from 'vue'
import { getSnapshotList, renameSnapshot, deleteSnapshots } from '../api/snapshot'

const snapshots = ref<any[]>([])
const selected = ref<number[]>([])

function refresh() {
  getSnapshotList().then((res: any) => {
    snapshots.value = res.data.list
  })
}
function rename(snap: any) {
  const name = prompt('请输入新名称', snap.name || '')
  if (name) {
    renameSnapshot(snap.id, name).then(refresh)
  }
}
function del(id: number) {
  if (confirm('确定删除该快照？')) {
    deleteSnapshots([id]).then(refresh)
  }
}
function batchDelete() {
  if (confirm('确定批量删除选中快照？')) {
    deleteSnapshots(selected.value).then(() => {
      selected.value = []
      refresh()
    })
  }
}
function openTabs(snap: any) {
  if (!snap.tabs || !snap.tabs.length) {
    alert('快照内没有标签页');
    return;
  }
  // 通知 background.js 打开所有页面
  chrome.runtime.sendMessage({ action: 'openTabs', tabs: snap.tabs });
}
onMounted(refresh)
</script> 