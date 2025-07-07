<template>
  <canvas ref="canvas" :width="width" :height="height" class="chart"></canvas>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  data: Object,
  options: Object,
  type: {
    type: String,
    default: 'bar',
  },
  width: {
    type: [String, Number],
    default: 830,
  },
  height: {
    type: [String, Number],
    default: 220,
  },
})

const canvas = ref(null)
let chartInstance = null

onMounted(() => {
  if (canvas.value) {
    chartInstance = new Chart(canvas.value, {
      type: props.type,
      data: props.data,
      options: props.options || {},
    })
  }
})

watch(
  () => [props.data, props.options, props.type],
  ([newData, newOptions, newType]) => {
    if (chartInstance) {
      chartInstance.config.type = newType
      chartInstance.data = newData
      chartInstance.options = newOptions || {}
      chartInstance.update()
    }
  }
)
</script>

<style lang="scss"></style>
