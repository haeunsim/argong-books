<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import './scss/style.scss'
</script>

<style>
.v-main {
  padding: 96px 30px 28px !important;
}
</style>
