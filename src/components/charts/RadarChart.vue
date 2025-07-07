<template>
  <div class="wrap relative">
    <div class="chart-label" style="top: 40px; left: 50%">
      <p class="body3">accuracy</p>

      <span class="body2-bold">{{ Math.ceil(userData[0]) }}%</span>
    </div>
    <div class="chart-label" style="top: 130px; right: -30px">
      <p class="body3">intonation</p>
      <span class="body2-bold">{{ Math.ceil(userData[1]) }}%</span>
    </div>
    <div class="chart-label" style="bottom: -10px; right: 50px">
      <p class="body3">speed</p>
      <span class="body2-bold">{{ Math.ceil(userData[2]) }}%</span>
    </div>
    <div class="chart-label" style="bottom: -10px; left: 70px">
      <p class="body3">pause</p>
      <span class="body2-bold">{{ Math.ceil(userData[3]) }}%</span>
    </div>
    <div class="chart-label" style="top: 130px; left: 15px">
      <p class="body3">accent</p>
      <span class="body2-bold">{{ Math.ceil(userData[4]) }}%</span>
    </div>

    <canvas ref="radarChart" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
let chart = null

export default {
  props: {
    userData: {
      type: Array,
      default: [80, 90, 70, 80, 60],
    },
  },
  data: () => ({
    chartData: {
      labels: ['accuracy', 'intonation', 'speed', 'pause', 'accent'],
      datasets: [
        {
          type: 'radar',
          data: [],
          backgroundColor: ['#3D90EF20'],
          borderColor: ['#3D90EF'],
          borderWidth: 2,
          datalabels: { display: false },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        r: {
          max: 100,
          min: 0,
          angleLines: {
            display: false,
          },
          ticks: {
            display: false,
            stepSize: 20,
          },
          pointLabels: {
            // display: false
            color: 'rgba(0,0,0,0)',
            display: true,
            font: {
              size: 8,
              family: 'notosansmedium',
            },
            padding: 20,
          },
        },
      },
      elements: {
        point: {
          radius: 2,
        },
        line: {
          borderWidth: 3,
        },
      },
      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          enabled: false,
        },
      },
    },
  }),
  watch: {
    userData() {
      this.createChart()
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.createChart()
    })
  },
  methods: {
    createChart() {
      if (chart) {
        chart.destroy()
      }
      chart = new Chart(this.$refs.radarChart, {
        type: 'radar',
        data: this.chartData,
        options: this.options,
      })
      chart.data.datasets[0].data = this.userData

      chart.update()
    },
  },
}
</script>

<style scoped lang="scss">
.chart-label {
  position: absolute;
  width: fit-content;
  text-align: center;
  transform: translate(-50%, -50%);

  p {
    font-size: 12px;
    font-weight: 400;
  }

  span {
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
