<template>
  <Datepicker v-model="dateRange" range :format="'yyyy-MM-dd'" />
</template>

<script setup>
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const dateRange = ref({ start: new Date(), end: new Date() })
</script>
