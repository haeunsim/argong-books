<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6 flex items-center justify-between">
        <div class="flex items-center text-sm">
          <span class="mr-4 flex items-center">
            <span class="mr-2 inline-block h-3 w-3 rounded-full bg-yellow-300"></span>
            접속중
          </span>
          <span class="flex items-center">
            <span class="mr-2 inline-block h-3 w-3 rounded-full bg-gray-300"></span>
            로그아웃
          </span>
        </div>
        <button
          class="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5"
            />
          </svg>
          새로고침
        </button>
      </div>

      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <div
          v-for="student in students"
          :key="student.id"
          class="rounded-xl p-4 text-center shadow"
          :class="student.online ? 'bg-yellow-100' : 'bg-gray-200'"
        >
          <div class="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full">
            <img
              src="@/assets/images/user6.jpg"
              alt="avatar"
              class="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <p class="text-sm font-semibold text-gray-800">{{ student.name }}</p>
          <p class="text-xs text-gray-500">
            {{ String(student.id).padStart(2, '0') }} 학생 {{ student.id }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([
  { id: 1, name: '그럴만두하지', online: true },
  { id: 2, name: '고기만두', online: false },
  { id: 3, name: '김치만두', online: true },
  { id: 4, name: '찐만두', online: true },
  { id: 5, name: '물만두', online: false },
  { id: 6, name: '군만두', online: true },
  { id: 7, name: '왕만두', online: true },
  { id: 8, name: '새우만두', online: false },
  { id: 9, name: '갈비만두', online: false },
  { id: 10, name: '납작만두', online: true },
  { id: 11, name: '비빔만두', online: false },
  { id: 12, name: '튀김만두', online: false },
  { id: 13, name: '메밀만두', online: true },
  { id: 14, name: '어린이만두', online: true },
  { id: 15, name: '사랑만두', online: false },
  { id: 16, name: '행복만두', online: true },
  { id: 17, name: '희망만두', online: true },
  { id: 18, name: '성공만두', online: false },
])
</script>

<style scoped></style>
