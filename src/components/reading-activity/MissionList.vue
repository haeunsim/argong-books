<template>
  <BaseCard :heading="`진행 중인 교사미션 현황 (총 ${missions.length}건)`">
    <!-- <div class="mb-2 flex justify-end gap-4">
      <div class="status-green">
        <span class="dot"></span>
        <span>진행 중</span>
      </div>
      <div class="status-yellow">
        <span class="dot"></span>
        <span>대기 중</span>
      </div>
      <div class="status-gray">
        <span class="dot"></span>
        <span>종료됨</span>
      </div>
    </div> -->

    <table class="table-default">
      <thead>
        <tr>
          <th width="266">미션명</th>
          <th>도서</th>
          <th width="114">기간</th>
          <th width="110">진행률</th>
          <th width="88">상세 조회</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mission, idx) in missions" :key="idx">
          <td>
            <div class="mission-info">
              <div>
                <div>{{ mission.name }}</div>
                <div class="sub">생성일: {{ mission.createdAt }}</div>
              </div>
            </div>
          </td>
          <td>
            <ul v-if="mission.books.length" class="books">
              <li v-for="(book, bIdx) in mission.books" :key="bIdx">{{ book }}</li>
            </ul>
            <span v-else>-</span>
          </td>
          <td>{{ mission.period.start }} -<br />{{ mission.period.end }}</td>
          <td class="center">
            <div class="progress-bar">
              <div class="progress" :style="{ width: mission.progress.percent + '%' }"></div>
            </div>
            <div class="progress-text">
              {{ mission.progress.current }}/{{ mission.progress.total }}
              <span>{{ mission.progress.percent }}%</span>
            </div>
          </td>
          <td>
            <div class="flex justify-around">
              <span class="icon view" @click="openDetailModal">
                <IconDocument />
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <DetailModal v-if="showDetailModal" :mission="selectedMission" @close="closeDetailModal" />
  </BaseCard>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '../common/BaseCard.vue'
import IconDocument from '../icons/IconDocument.vue'
import IconEdit from '../icons/IconEdit.vue'
import IconDelete from '../icons/IconDelete.vue'
import DetailModal from './DetailModal.vue'

const showDetailModal = ref(false)
const selectedMission = ref(null)

const missions = ref([
  {
    name: '5학년 2반 6월 영어책 읽기',
    createdAt: '2025.05.24',
    books: ['Puss in Boots', 'The Ugly Duckling The Ugly Duckling'],
    period: { start: '2025.07.01', end: '2025.07.29' },
    progress: { current: 13, total: 18, percent: 72 },
  },
  {
    name: '열여덟글자열여덟글자열여덟글자열여덟',
    createdAt: '2025.07.01',
    books: ['Puss in Boots', 'The Ugly Duckling The Ugly', 'Ant, Bag and Cat'],
    period: { start: '2025.07.01', end: '2025.08.05' },
    progress: { current: 0, total: 10, percent: 0 },
  },
  {
    name: '열여덟글자열여덟글자열여덟글자열여덟',
    createdAt: '2025.06.01',
    books: ['Puss in Boots'],
    period: { start: '2025.06.01', end: '2025.09.15' },
    progress: { current: 12, total: 12, percent: 100 },
  },
])

const openDetailModal = (mission) => {
  selectedMission.value = mission
  showDetailModal.value = true
}

const closeDetailModal = () => {
  showDetailModal.value = false
  selectedMission.value = null
}
</script>

<style scoped>
/* .status-green {
  @apply flex items-center gap-2 text-[#10d298];
}
.status-green .dot {
  @apply h-1.5 w-1.5 rounded-full bg-[#10d298];
}

.status-yellow {
  @apply flex items-center gap-2 text-[#f5b506];
}
.status-yellow .dot {
  @apply h-1.5 w-1.5 rounded-full bg-[#f5b506];
}

.status-gray {
  @apply flex items-center gap-2 text-[#9a9a9a];
}
.status-gray .dot {
  @apply h-1.5 w-1.5 rounded-full bg-[#9a9a9a];
} */

.table-default td {
  text-align: left;
}

.table-default td.center {
  text-align: center;
}

.mission-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sub {
  font-size: 12px;
  color: #888;
  text-align: left;
}
.progress-bar {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-top: 4px;
  overflow: hidden;
}
.progress {
  height: 100%;
  background: #10d298;
  border-radius: 4px;
  transition: width 0.3s;
}
.progress-text {
  font-size: 12px;
  margin-top: 2px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.progress-text span {
  color: #10d298;
  font-weight: 600;
}
.icon {
  cursor: pointer;
  margin-right: 8px;
  font-size: 18px;
  transition: color 0.2s;
}
.icon:last-child {
  margin-right: 0;
}
.icon.view {
  color: #2196f3;
}
.icon.edit {
  color: #4caf50;
}
.icon.delete {
  color: #f44336;
}
.icon.view:hover {
  color: #1769aa;
}
.icon.edit:hover {
  color: #357a38;
}
.icon.delete:hover {
  color: #b71c1c;
}

ul.books {
  text-align: left;
  list-style: inside;
}
@media (max-width: 800px) {
}
</style>
