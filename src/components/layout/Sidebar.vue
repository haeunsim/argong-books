<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <h4>5학년 2반</h4>
      <div
        v-for="(item, index) in sidebarItems"
        :key="index"
        :class="['sidebar-item', { active: isActive(item) }]"
        @click="navigateTo(item.to)"
      >
        <div class="item-content">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </div>
        <span v-if="item.count" class="count-badge">{{ item.count }}</span>
      </div>
    </div>

    <div
      class="sidebar-container"
      v-if="['studentReadingStatus', 'studentReadingStatusDetail'].includes(route.name)"
    >
      <div
        v-for="student in students"
        :key="student.id"
        :class="['sidebar-item', 'student', { active: isActiveStudent(student.id) }]"
        @click="goToStudent(student.id)"
        style="cursor: pointer"
      >
        <p class="num">{{ student.num }}</p>
        <h5 class="name">{{ student.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const sidebarItems = computed(() => {
  return route.meta.sidebarItems || []
})

const isActiveStudent = (studentId) => {
  return route.params.studentId === studentId
}

// 세븐틴 멤버(나이순) 학생 목록
const students = [
  { id: 'choiseungcheol', num: '01', name: '최승철' },
  { id: 'yoonjunghan', num: '02', name: '윤정한' },
  { id: 'hongjisoo', num: '03', name: '홍지수' },
  { id: 'moonjunghwan', num: '04', name: '문준휘' },
  { id: 'kwonsoonyoung', num: '05', name: '권순영' },
  { id: 'jeonwonwoo', num: '06', name: '전원우' },
  { id: 'leejihoon', num: '07', name: '이지훈' },
  { id: 'xuiminghao', num: '08', name: '서명호' },
  { id: 'kimminkyu', num: '09', name: '김민규' },
  { id: 'doogyu', num: '10', name: '이석민' },
  { id: 'booseungkwan', num: '11', name: '부승관' },
  { id: 'chwehan', num: '12', name: '최한솔' },
  { id: 'leeseokmin', num: '13', name: '이찬' },
]

const navigateTo = (to) => {
  if (to) {
    // '학생 독서 현황' 메뉴 클릭 시 첫 번째 학생으로 이동
    if (to.name === 'studentReadingStatus') {
      router.push({ path: `/reading/status/${students[0].id}` })
    } else {
      router.push(to)
    }
  }
}

const goToStudent = (studentId) => {
  router.push({ path: `/reading/status/${studentId}` })
}

const isActive = (item) => {
  return route.name === item.to?.name
}
</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.sidebar-container {
  width: 370px;
  background: #fff;
  padding: 24px;
  border-radius: 18px;
  /* max-height: 576px;
  overflow-y: scroll; */

  h4 {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 18px;
  }
}

.sidebar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
  border: 1px solid #88c0ff;
  border-radius: 18px;
  background-color: #ffffff;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

.sidebar-item.student {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 14px;
  margin-bottom: 10px;

  .num {
    font-size: 20px;
    font-weight: 700;
    color: #3d90ef;
  }
  h5 {
    margin-bottom: 0;
  }
}

.sidebar-item:last-child {
  margin-bottom: 0;
}

.sidebar-item:hover {
  background-color: #f0f4ff;
}

.sidebar-item.active {
  border-color: #3d8bff;
  background-color: #3d8bff;
  color: #ffffff;
  .num {
    color: #fff;
  }
}

.sidebar-item.active:hover {
  background-color: #3375d6;
}

.item-content {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #3d90ef;
}

.sidebar-item.active .title {
  color: #ffffff;
}

.description {
  font-size: 14px;
  color: #6c757d;
  margin: 0;
}

.sidebar-item.active .description {
  color: #e0eaff;
}

.count-badge {
  padding: 4px 8px;
  border-radius: 16px;
  background-color: #e9ecef;
  color: #495057;
  font-size: 12px;
  font-weight: 500;
}

.sidebar-item.active .count-badge {
  background-color: #ffffff;
  color: #3d8bff;
}
</style>
