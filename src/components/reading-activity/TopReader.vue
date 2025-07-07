<template>
  <BaseCard>
    <div class="card-header">
      <div>
        <h4>
          우리 반 다독왕
          <span v-if="showMonth">({{ monthLabel }})</span>
        </h4>
        <p class="date">기준 날짜 : {{ weekRangeLabel }}</p>
      </div>
      <button class="date-btn" @click="onDateChangeClick">날짜 변경</button>
    </div>

    <div class="podium-wrap">
      <div class="podium-item">
        <span class="book-count">13권</span>
        <p class="podium-name">김삐뽀</p>
        <div class="podium second">
          <p class="rank"><span>2</span>등</p>
        </div>
      </div>
      <div class="podium-item">
        <span class="book-count">20권</span>
        <p class="podium-name">하쿠</p>
        <div class="podium first">
          <div class="flex flex-col">
            <p class="rank"><span>1</span>등</p>
            👑
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0018 5C12.2697 5 12.5321 5.06979 12.7576 5.20117C12.983 5.33256 13.1625 5.52003 13.2744 5.74121C13.3862 5.96253 13.4255 6.20903 13.3882 6.4502C13.3508 6.69125 13.2387 6.91789 13.0642 7.10254L15.3601 9.73145C15.458 9.8439 15.5951 9.92318 15.7487 9.95605C15.9025 9.98886 16.0642 9.97323 16.2071 9.91211L19.7222 8.40527C19.6717 8.14823 19.7091 7.8834 19.8299 7.64648C19.9508 7.40943 20.1493 7.21116 20.398 7.08008C20.6466 6.94911 20.9341 6.89077 21.2204 6.91309C21.5065 6.93548 21.7783 7.03756 21.9987 7.20508C22.2191 7.37273 22.3771 7.59829 22.4519 7.85059C22.5266 8.10285 22.514 8.36964 22.416 8.61523C22.318 8.86086 22.1396 9.07358 21.9043 9.22363C21.6691 9.3736 21.3887 9.45388 21.1014 9.4541C21.0594 9.4541 21.0174 9.45261 20.9763 9.44922L19.1562 17.7207C19.0769 18.0814 18.8621 18.4064 18.5491 18.6396C18.2362 18.8727 17.8442 19.0001 17.4396 19H6.5599C6.15594 18.9995 5.76479 18.8716 5.45245 18.6387C5.14012 18.4058 4.92593 18.0817 4.84642 17.7217L3.0263 9.44922C2.74514 9.47231 2.46257 9.41731 2.21622 9.29199C1.96991 9.16668 1.77044 8.97694 1.64506 8.74707C1.51969 8.51719 1.47441 8.25797 1.5138 8.00391C1.55321 7.74984 1.67615 7.51266 1.86655 7.32324C2.0569 7.13388 2.30551 7.00095 2.58024 6.94238C2.8551 6.88384 3.14354 6.90229 3.40673 6.99512C3.6698 7.08796 3.89639 7.25122 4.05582 7.46289C4.21508 7.67453 4.29986 7.92522 4.29987 8.18164C4.29986 8.25787 4.29333 8.33243 4.27936 8.40527L7.79554 9.91211C7.9385 9.97348 8.09995 9.98978 8.2539 9.95703C8.408 9.92421 8.54543 9.84432 8.64356 9.73145L10.9395 7.10254C10.765 6.91789 10.6528 6.69126 10.6154 6.4502C10.5782 6.20903 10.6175 5.96253 10.7293 5.74121C10.8411 5.52 11.0206 5.33258 11.2461 5.20117C11.4716 5.06974 11.7339 5.00002 12.0018 5Z"
                fill="white"
              />
            </svg> -->
          </div>
        </div>
      </div>
      <div class="podium-item">
        <span class="book-count">10권</span>
        <p class="podium-name">쿠키</p>
        <div class="podium third">
          <p class="rank"><span>3</span>등</p>
        </div>
      </div>
    </div>

    <div class="podium"></div>

    <div class="topreader-list">
      <div class="list-row" v-for="(student, idx) in students" :key="student.name">
        <div class="list-rank">{{ idx + 4 }}등</div>
        <div class="list-name">{{ student.name }}</div>
        <div class="list-bar-wrap">
          <div class="list-bar" :style="{ width: student.percent + '%' }"></div>
        </div>
        <div class="list-count">{{ student.count }}권</div>
      </div>
    </div>

    <DatePickerModal
      v-if="showDetailModal"
      :date-range="[weekRange.tuesday, weekRange.monday]"
      @close="closeDetailModal"
    />
  </BaseCard>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseCard from '../common/BaseCard.vue'
import DatePickerModal from './DatePickerModal.vue'

const showDetailModal = ref(false)
const selectedMission = ref(null)
const showMonth = ref(true)

const students = ref([
  { name: '최승철', count: 11, percent: 73 },
  { name: '윤정한', count: 11, percent: 73 },
  { name: '홍지수', count: 10, percent: 67 },
  { name: '문준휘', count: 10, percent: 67 },
  { name: '전원우', count: 9, percent: 60 },
  { name: '권순영', count: 8, percent: 53 },
  { name: '이지훈', count: 7, percent: 47 },
  { name: '이석민', count: 7, percent: 47 },
  { name: '김민규', count: 7, percent: 47 },
  { name: '서명호', count: 7, percent: 47 },
  { name: '최한솔', count: 7, percent: 47 },
  { name: '부승관', count: 7, percent: 47 },
  { name: '서명호', count: 7, percent: 47 },
])

const openDetailModal = (mission) => {
  selectedMission.value = mission
  showDetailModal.value = true
}

const closeDetailModal = () => {
  showDetailModal.value = false
  selectedMission.value = null
}

function onDateChangeClick() {
  showMonth.value = false
  openDetailModal()
}

// 오늘이 포함된 주의 화요일~월요일 구하기
function getWeekRange() {
  const today = new Date()
  const day = today.getDay() // 0: 일, 1: 월, ..., 6: 토

  // 화요일(2)까지 며칠 전인지 계산
  const diffToTuesday = (day + 7 - 2) % 7 // 오늘이 화요일이면 0, 수요일이면 1, 월요일이면 6

  const tuesday = new Date(today)
  tuesday.setDate(today.getDate() - diffToTuesday)

  const monday = new Date(tuesday)
  monday.setDate(tuesday.getDate() + 6)

  return { tuesday, monday }
}

function formatDateWithDay(date) {
  const days = ['일', '월', '화', '수', '목', '금', '토']
  return `${date.getMonth() + 1}/${date.getDate()}(${days[date.getDay()]})`
}

const weekRangeLabel = computed(() => {
  const { tuesday, monday } = getWeekRange()
  return `${formatDateWithDay(tuesday)} ~ ${formatDateWithDay(monday)}`
})

const monthLabel = computed(() => {
  const today = new Date()
  return `${today.getMonth() + 1}월`
})

const weekRange = computed(() => getWeekRange())
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h4 {
    color: #292929;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.6px;
  }

  .date {
    color: #888;
    font-size: 13px;
  }
  .date-btn {
    background: #f5f6fa;
    border: 1px solid #dbeafe;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 13px;
    color: #2563eb;
    cursor: pointer;
  }
}

.topreader-list {
  margin-top: 10px;
  .list-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
    font-size: 14px;
    .list-rank {
      width: 32px;
      color: #2563eb;
      font-weight: 600;
    }
    .list-name {
      width: 70px;
    }
    .list-bar-wrap {
      flex: 1;
      background: #f1f5f9;
      border-radius: 6px;
      height: 8px;
      margin: 0 8px;
      overflow: hidden;
      .list-bar {
        height: 100%;
        background: #22d3ee;
        border-radius: 6px;
        transition: width 0.3s;
      }
    }
    .list-count {
      width: 32px;
      text-align: right;
      color: #222;
    }
    .list-badge {
      background: #ff5722;
      color: #fff;
      font-size: 11px;
      border-radius: 6px;
      padding: 1px 7px;
      margin-left: 4px;
      font-weight: bold;
    }
  }
}

.podium-wrap {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
}
.podium-item {
  width: 76px;
  text-align: center;

  .podium-name {
    font-weight: 700;
    margin-bottom: 10px;
  }
  .book-count {
    font-size: 12px;
    color: #2563eb;
  }
}

.podium {
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 10px;
  font-size: 35px;
  color: #fff;
  border-radius: 8px 8px 0 0;

  &.first {
    height: 154px;
    background: #2563eb;
  }
  &.second {
    height: 112px;
    background: #67aeff;
  }
  &.third {
    height: 76px;
    background: #dbeafe;
    color: #494949;
  }
}
.rank {
  font-weight: 700;
  font-size: 16px;
  span {
    font-size: 22px;
  }
}
</style>
