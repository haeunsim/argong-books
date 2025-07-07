<template>
  <div class="container">
    <h2 class="page-title">우리 반 독서 대시보드</h2>

    <div class="flex gap-[30px]">
      <ReadingActivity heading="우리 반 독서 활동" firstLabel="개별 평균 (권)" />
      <QuizResult heading="독서 퀴즈 결과" />
    </div>

    <MissionList />

    <div class="flex gap-[30px]">
      <div class="w-1/2">
        <TopReader />
      </div>
      <div class="flex w-1/2 flex-col gap-[30px]">
        <AttendanceRank />
        <CurriculumReading />
      </div>
    </div>
  </div>
</template>

<script setup>
import EditableTable from '@/components/common/EditableTable.vue'
import CustomForm from '@/components/common/CustomForm.vue'
import ReadingActivity from '@/components/reading-activity/ReadingActivity.vue'
import QuizResult from '@/components/reading-activity/QuizResult.vue'
import AttendanceRank from '@/components/reading-activity/AttendanceRank.vue'
import CurriculumReading from '@/components/reading-activity/CurriculumReading.vue'
import TopReader from '@/components/reading-activity/TopReader.vue'
import MissionList from '@/components/reading-activity/MissionList.vue'
</script>

<style scoped>
.card {
  min-width: 425px;
  width: 100%;
  min-height: 300px;
  background: #fff;
  padding: 20px 25px;
  border-radius: 20px;
  border: 1px solid #e8e8e8;

  h4 {
    color: #292929;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.6px;
  }
}
</style>
