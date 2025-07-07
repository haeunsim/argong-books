<template>
  <div class="app-layout">
    <Sidebar />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/Sidebar.vue'
</script>

<style scoped>
.app-layout {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
}

.main-content {
  width: 880px;
  flex-grow: 1;
}
</style>
