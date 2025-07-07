<template>
  <BaseCard heading="월별 출석 현황">
    <Barchart :data="chartData" :options="chartOptions" type="line" />
    <!-- dot: 반평균 / 나 (추후 구현) -->
  </BaseCard>
</template>

<script setup>
import BaseCard from '../common/BaseCard.vue'
import Barchart from '@/components/charts/Barchart.vue'
import { ref } from 'vue'

const months = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
]
const myAttendance = [10, 13, 15, 25, 15, 21, 12, 0, 0, 0, 0, 0]
const classAvg = [18, 17, 20, 22, 21, 19, 18, 0, 0, 0, 0, 0]

const chartData = ref({
  labels: months,
  datasets: [
    {
      label: '반 평균',
      data: classAvg,
      borderColor: '#CAE3FF', // 연한 파란색
      backgroundColor: '#CAE3FF',
      fill: false,
      tension: 0.3,
      pointBackgroundColor: '#CAE3FF',
      pointRadius: 3,
      pointHoverRadius: 6,
    },
    {
      label: '나',
      data: myAttendance,
      borderColor: '#10D298', // 초록색
      backgroundColor: '#10D298',
      fill: false,
      tension: 0.3,
      pointBackgroundColor: '#10D298',
      // pointRadius: 3,
      // pointHoverRadius: 6,
    },
  ],
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        boxWidth: 4,
        boxHeight: 4,
        font: {
          family: 'Wanted Sans Variable',
          size: 12,
        },
        color: '#9A9A9A',
      },
    },
  },
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 30, // 이미지처럼 y축 최대값을 더 높게
      title: {
        display: true,
        text: '(회)',
        font: { family: 'Noto Sans KR', size: 12 },
        color: '#9A9A9A',
      },
      ticks: {
        color: '#9A9A9A',
        font: {
          family: 'Noto Sans KR',
          size: 12,
        },
        stepSize: 5,
      },
    },
    x: {
      grid: {
        display: false, // ✅ 세로선 제거
      },
      title: {
        display: false,
      },
      ticks: {
        font: {
          family: 'Noto Sans KR',
          size: 12,
        },
        color: '#9A9A9A',
      },
    },
  },
}
</script>
