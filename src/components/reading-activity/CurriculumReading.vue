<template>
  <BaseCard heading="교과서 연계 독서활동">
    <!-- <div class="list">
      <div class="list-row" v-for="(student, idx) in students" :key="student.name">
        <div class="list-rank">{{ idx + 1 }}단원</div>
        <div class="list-bar-wrap">
          <div class="list-bar" :style="{ width: student.percent + '%' }"></div>
        </div>
        <div class="list-count">{{ student.percent }}%</div>
      </div>
    </div> -->

    <div class="list2">
      <div class="list-row" v-for="(student, idx) in students" :key="student.name">
        <div class="flex">
          <p class="list-rank">{{ idx + 1 }}단원</p>
          <p class="list-count">{{ student.percent }}%</p>
        </div>
        <div class="list-bar-wrap">
          <div class="list-bar" :style="{ width: student.percent + '%' }"></div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../common/BaseCard.vue'
import { ref } from 'vue'

const students = ref([
  { percent: 90 },
  { percent: 75 },
  { percent: 20 },
  { percent: 7 },
  { percent: 0 },
  { percent: 100 },
  { percent: 5 },
  { percent: 22 },
  { percent: 33 },
  { percent: 44 },
  { percent: 55 },
  { percent: 66 },
  { percent: 0 },
])
</script>

<style scoped lang="scss">
/* .list {
  margin-top: 10px;

  .list-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
    font-size: 16px;

    .list-rank {
      width: 50px;
    }

    .list-name {
      width: 70px;
    }

    .list-bar-wrap {
      flex: 1;
      background: #cae3ff;
      border-radius: 6px;
      height: 8px;
      margin: 0 8px;
      overflow: hidden;

      .list-bar {
        height: 100%;
        background: #258bff;
        border-radius: 6px;
        transition: width 0.3s;
      }
    }

    .list-count {
      width: 50px;
      text-align: right;
    }
  }
} */
.list2 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* margin-top: 50px; */

  p {
    font-size: 16px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }
  .list-bar-wrap {
    flex: 1;
    background: #cae3ff;
    border-radius: 6px;
    height: 8px;
    overflow: hidden;
    margin-top: 2px;

    .list-bar {
      height: 100%;
      background: #258bff;
      border-radius: 6px;
      transition: width 0.3s;
    }
  }
}
</style>
