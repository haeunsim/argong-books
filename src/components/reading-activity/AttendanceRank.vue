<template>
  <BaseCard heading="우리 반 출석 랭킹 (6월)">
    <table class="transparent-table">
      <tr>
        <th width="50">랭킹</th>
        <th width="100">이름</th>
        <th>월 누적 출석일</th>
        <th>전체 누적 출석일</th>
      </tr>
      <tr v-for="(member, idx) in members" :key="member.name">
        <td>{{ idx + 1 }}</td>
        <td>{{ member.name }}</td>
        <td>{{ member.month }}</td>
        <td>{{ member.total }}</td>
      </tr>
    </table>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../common/BaseCard.vue'
import { ref } from 'vue'

const members = ref([
  { name: '최승철', month: 8, total: 75 },
  { name: '윤정한', month: 7, total: 74 },
  { name: '홍지수', month: 7, total: 73 },
  { name: '문준휘', month: 6, total: 72 },
  { name: '전원우', month: 6, total: 71 },
  { name: '권순영', month: 6, total: 70 },
  { name: '이지훈', month: 5, total: 69 },
  { name: '이석민', month: 5, total: 68 },
  { name: '김민규', month: 5, total: 67 },
  { name: '서명호', month: 4, total: 66 },
  { name: '최한솔', month: 4, total: 65 },
  { name: '부승관', month: 3, total: 64 },
  { name: '이찬', month: 3, total: 63 },
])
</script>

<style scoped lang="scss">
.transparent-table {
  width: 100%;
  text-align: center;

  thead {
    background-color: #f0f4f8;
    font-weight: bold;
    border-bottom: 2px solid #ccc;
  }

  th {
    padding-bottom: 10px;
  }
  td {
    padding: 4px 10px;
  }
  td:first-child {
    font-weight: bold;
  }
  tr:nth-child(2) td:first-child {
    color: #ffd700;
    font-weight: bold;
  } /* 1등 - 금 */
  tr:nth-child(3) td:first-child {
    color: #c0c0c0;
    font-weight: bold;
  } /* 2등 - 은 */
  tr:nth-child(4) td:first-child {
    color: #cd7f32;
    font-weight: bold;
  } /* 3등 - 동 */
}
</style>
