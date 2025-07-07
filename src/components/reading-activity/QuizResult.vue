<template>
  <BaseCard :heading="heading">
    <div class="quiz-chart-wrap">
      <div class="chart-wrap">
        <canvas ref="pieCanvas" class="chart-canvas"></canvas>
      </div>
      <div class="legend-list">
        <div class="legend-item" v-for="(item, idx) in legend" :key="item.label">
          <span class="legend-dot" :style="{ background: item.color }"></span>
          <span class="legend-label" :style="{ color: item.color, fontWeight: 'bold' }">{{
            item.label
          }}</span>
          <span class="legend-percent">({{ item.percent }}%)</span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import Chart from 'chart.js/auto'
import BaseCard from '../common/BaseCard.vue'

const props = defineProps({
  heading: String,
})

const pieCanvas = ref(null)

const data = [50, 30, 20]
const labels = ['Perfect', 'Good', 'Not bad']
const colors = ['#2196f3', '#16d6a9', '#ff9800']

const legend = labels.map((label, idx) => ({
  label,
  color: colors[idx],
  percent: data[idx],
}))

onMounted(() => {
  if (pieCanvas.value) {
    new Chart(pieCanvas.value, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: colors,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || ''
                const value = context.parsed || 0
                return `${label}: ${value}%`
              },
            },
          },
        },
      },
    })
  }
})
</script>

<style scoped lang="scss">
.chart-canvas {
  width: 144px;
  height: 144px;
}
.quiz-chart-wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  height: 190px;
}
.legend-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 16px;
}
.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.legend-label {
  margin-right: 0.2rem;
}
.legend-percent {
  color: #444;
  font-size: 1rem;
}
</style>
