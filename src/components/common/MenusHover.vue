<template>
  <div class="mt-4 text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" v-bind="props" class="rounded-pill px-4"> Dropdown </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const items = ref([
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
])
</script>
