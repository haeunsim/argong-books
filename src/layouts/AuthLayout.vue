<template>
  <div class="app-layout">
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
.app-layout {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
}

.main-content {
  width: 1280px;
  flex-grow: 1;
}
</style>
