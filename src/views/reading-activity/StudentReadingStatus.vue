<template>
  <div class="container">
    <h2 class="page-title">
      학생 독서 현황 >
      {{ student.name }}
    </h2>

    <div class="wrap-status-menu">
      <div
        :class="viewMode === 'summary' ? 'menu-btn__active' : 'menu-btn__deactive'"
        @click="viewMode = 'summary'"
      >
        요약
      </div>
      <div
        :class="viewMode === 'full' ? 'menu-btn__active' : 'menu-btn__deactive'"
        @click="viewMode = 'full'"
      >
        전체 독서 내역
      </div>
    </div>

    <!-- 요약 화면 -->
    <section v-if="viewMode === 'summary'" class="container">
      <div class="flex gap-[30px]">
        <ReadingActivity heading="독서 활동" firstLabel="완독 책 (권)" />
        <QuizResult heading="독서 퀴즈 결과(누적)" />
      </div>

      <MonthlyAttendance />

      <div class="flex items-start gap-[30px]">
        <RecentBooks />
        <CurriculumReading />
      </div>
    </section>

    <!-- 전체 독서 내역 -->
    <section v-else class="container">
      <!-- 한 페이지에 BookCard - 16개 (4X4) 도서 리스트 나오도록 -->
      <button @click="openBookModal">BookModal</button>
      <div class="grid grid-cols-3 gap-6">
        <BookCard v-for="n in 12" :key="n" />
      </div>

      <div>
        <BookModal v-if="showBookModal" @close="closeBookModal" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import CurriculumReading from '@/components/reading-activity/CurriculumReading.vue'
import MonthlyAttendance from '@/components/reading-activity/MonthlyAttendance.vue'
import QuizResult from '@/components/reading-activity/QuizResult.vue'
import ReadingActivity from '@/components/reading-activity/ReadingActivity.vue'
import RecentBooks from '@/components/reading-activity/RecentBooks.vue'
import BookCard from '@/components/common/BookCard.vue'
import BookModal from '@/views/reading-activity/modals/BookModal.vue'

const route = useRoute()
const studentId = route.params.studentId

const students = [
  { id: 'choiseungcheol', name: '최승철' },
  { id: 'yoonjunghan', name: '윤정한' },
  { id: 'hongjisoo', name: '홍지수' },
  { id: 'moonjunghwan', name: '문준휘' },
  { id: 'kwonsoonyoung', name: '권순영' },
  { id: 'jeonwonwoo', name: '전원우' },
  { id: 'leejihoon', name: '이지훈' },
  { id: 'xuiminghao', name: '서명호' },
  { id: 'kimminkyu', name: '김민규' },
  { id: 'doogyu', name: '이석민' },
  { id: 'booseungkwan', name: '부승관' },
  { id: 'chwehan', name: '최한솔' },
  { id: 'leeseokmin', name: '이찬' },
]

const student = computed(() => students.find((s) => s.id === studentId))
const viewMode = ref('summary') // 'summary' | 'full'

const showBookModal = ref(false)

const openBookModal = () => {
  showBookModal.value = true
}

const closeBookModal = () => {
  showBookModal.value = false
}
</script>

<style scoped>
.wrap-status-menu {
  width: fit-content;
  height: 48px;
  background-color: var(--chart-blue-bg);
  border-radius: 40px;
  display: flex;

  > div {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.menu-btn__active,
.menu-btn__deactive {
  min-width: 120px;
  height: inherit;
  padding: 0 32px;
  color: white;
  border-radius: 40px;
}
.menu-btn__active {
  background-color: var(--main-blue-vivid);
}
</style>
