<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>기준 날짜 변경</h3>
        <p>
          '다독왕 랭킹'은 <span class="font-bold">정해진 기간</span> 동안 학생이<br />
          <span class="text-blue">완독한 도서 권수</span>를 기준으로 집계됩니다.
        </p>
      </div>

      <div>
        <VueDatePicker
          locale="ko"
          v-model="dateRange"
          range
          :format="prettyDate"
          :year-range="yearRange"
          :enable-time-picker="false"
          class="datepicker"
          :disabled-dates="disabledDates"
          week-start="0"
          inline
          auto-apply
        />
      </div>

      <div class="flex justify-center gap-5">
        <v-btn color="secondary" class="rounded-pill" @click="closeModal" variant="tonal"
          >취소</v-btn
        >
        <v-btn color="primary" class="rounded-pill" @click="closeModal" variant="tonal">확인</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
  dateRange: {
    type: Array,
    required: false,
    default: () => [],
  },
})

const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close')
}

const dateRange = ref(props.dateRange.length ? [...props.dateRange] : [null, null])
const today = new Date()
const minDate = new Date()
minDate.setDate(today.getDate() - 92)

const disabledDates = (date) => {
  return date > today || date < minDate
}

const currentYear = new Date().getFullYear()
const yearRange = [currentYear - 1, currentYear] // 작년~올해만 표시

// prop이 바뀌면 반영
watch(
  () => props.dateRange,
  (val) => {
    if (val && val.length === 2) dateRange.value = [...val]
  }
)
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 12px;
  max-width: 300px;
  max-height: 500px;
  padding: 16px;
  border: 1px solid #cae3ff;
}

.modal-header {
  h3 {
    color: #292929;
    font-size: 16px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.6px;
  }
  p {
    font-size: 14px;
  }
}

.datepicker * {
  border: none !important;
}

::v-deep(.datepicker) {
  border: none !important;
  box-shadow: none !important;
}
::v-deep(.dp__inner_nav svg) {
  fill: #3d90ef !important;
}
::v-deep(.dp__range_start),
::v-deep(.dp__range_end),
::v-deep(.dp__cell_selected) {
  background-color: #3d90ef !important;
  color: white !important;
}
::v-deep(.dp__range_start) {
  border-radius: 8px 0 0 8px;
}
::v-deep(.dp__range_end) {
  border-radius: 0 8px 8px 0;
}
::v-deep(.dp__range_between) {
  background-color: #dbecff !important;
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 26px;
  }
}
</style>
