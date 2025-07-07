<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>학생 참여 현황 > 상세 내역</h3>
        <button class="close-btn" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M2 2L21.799 21.799" stroke="#292929" stroke-width="2" stroke-linecap="round" />
            <path
              d="M21.8008 2L2.00179 21.799"
              stroke="#292929"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <div class="content scroll_able">
        <!-- 상태 범례 -->
        <div class="mb-4 flex justify-end gap-4">
          <div class="status-complete">
            <span>○ 완료</span>
          </div>
          <div class="status-progress">
            <span>△ 참여 중</span>
          </div>
          <div class="status-pending">
            <span>× 참여 전</span>
          </div>
        </div>

        <!-- 학생 참여 현황 테이블 -->
        <div class="table-container">
          <table class="table-default">
            <thead>
              <tr>
                <th>학생명</th>
                <th>종합</th>
                <th>도서1</th>
                <th>도서2</th>
                <th>도서3</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, idx) in students" :key="idx">
                <td>
                  <div class="student-info">
                    <span>{{ student.name }}</span>
                  </div>
                </td>
                <td>
                  <span :class="['status-icon', getBookStatusClass(student.overallStatus)]">
                    {{ student.overallStatus }}
                  </span>
                  <span :class="['status-text', getBookStatusClass(student.overallStatus)]">
                    ({{ student.completedCount }}/{{ student.totalBooks }})
                  </span>
                </td>
                <td>
                  <span :class="['status-icon', getBookStatusClass(student.books[0])]">
                    {{ student.books[0] }}
                  </span>
                </td>
                <td>
                  <span :class="['status-icon', getBookStatusClass(student.books[1])]">
                    {{ student.books[1] }}
                  </span>
                </td>
                <td>
                  <span :class="['status-icon', getBookStatusClass(student.books[2])]">
                    {{ student.books[2] }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  mission: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const students = ref([
  {
    name: '최승철',
    overallStatus: '○',
    completedCount: 2,
    totalBooks: 2,
    books: ['○', '○', '-'],
  },
  {
    name: '윤정한',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '△', '-'],
  },
  {
    name: '홍지수',
    overallStatus: '×',
    completedCount: 0,
    totalBooks: 2,
    books: ['×', '×', '-'],
  },
  {
    name: '문준휘',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '×', '-'],
  },
  {
    name: '전원우',
    overallStatus: '○',
    completedCount: 2,
    totalBooks: 2,
    books: ['○', '○', '-'],
  },
  {
    name: '권순영',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '△', '-'],
  },
  {
    name: '이지훈',
    overallStatus: '×',
    completedCount: 0,
    totalBooks: 2,
    books: ['×', '×', '-'],
  },
  {
    name: '이석민',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '×', '-'],
  },
  {
    name: '김민규',
    overallStatus: '○',
    completedCount: 2,
    totalBooks: 2,
    books: ['○', '○', '-'],
  },
  {
    name: '서명호',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '△', '-'],
  },
  {
    name: '최한솔',
    overallStatus: '×',
    completedCount: 0,
    totalBooks: 2,
    books: ['×', '×', '-'],
  },
  {
    name: '이찬',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '×', '-'],
  },
  {
    name: '하쿠',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '△', '-'],
  },
  {
    name: '쿠키',
    overallStatus: '×',
    completedCount: 0,
    totalBooks: 2,
    books: ['×', '×', '-'],
  },
  {
    name: '하은',
    overallStatus: '△',
    completedCount: 1,
    totalBooks: 2,
    books: ['○', '×', '-'],
  },
])

const getBookStatusClass = (status) => {
  switch (status) {
    case '○':
      return 'status-complete'
    case '△':
      return 'status-progress'
    case '×':
      return 'status-pending'
    default:
      return 'status-none'
  }
}

const closeModal = () => {
  emit('close')
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 660px;
  height: 660px;
  max-height: 80vh;
  /* overflow-y: auto; */
  padding: 30px 12px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 28px;
}

.content {
  height: 92%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cae3ff;
    border-radius: 3px;
  }
  padding: 0 28px;
}

.modal-header h3 {
  color: #292929;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.6px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #333;
}

.table-default th,
.table-default td {
  border: 1px solid #cae3ff;
  padding: 8px;
}
.table-default td {
  text-align: center;
}
.mission-info-section {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.mission-info-section h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.mission-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-item {
  display: flex;
  gap: 8px;
}

.detail-item .label {
  font-weight: 500;
  color: #666;
  min-width: 60px;
}

.table-container {
  overflow-x: auto;
}

.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-complete {
  color: #2196f3;
}

.status-progress {
  color: #4caf50;
}

.status-pending {
  color: #f44336;
}
.status-text {
  font-size: 12px;
}

.status-text.status-complete {
  color: #2196f3;
}

.status-text.status-progress {
  color: #4caf50;
}

.status-text.status-pending {
  color: #f44336;
}

.status-text.status-none {
  color: #9a9a9a;
}
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 26px;
  }

  .mission-details {
    gap: 6px;
  }

  .detail-item .label {
    min-width: 50px;
  }
}
</style>
