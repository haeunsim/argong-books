<!-- 불러올 때 사용 예시
<script setup>
import { ref } from 'vue'
import Pagination from '@/components/common/Pagination.vue'

const page = ref(1)
const limit = ref(10)
const total = ref(123)
</script>

<template>
  <Pagination
    v-model:page="page"
    v-model:limit="limit"
    :total-items="total"
  />
</template> 
-->

<template>
  <div class="flex items-center justify-center space-x-2 py-2">
    <button
      class="rounded bg-gray-200 px-2 py-1 hover:bg-gray-300 disabled:opacity-50"
      :disabled="page <= 1"
      @click="updatePage(page - 1)"
    >
      &laquo;
    </button>

    <span>Page {{ page }} / {{ totalPages }}</span>

    <button
      class="rounded bg-gray-200 px-2 py-1 hover:bg-gray-300 disabled:opacity-50"
      :disabled="page >= totalPages"
      @click="updatePage(page + 1)"
    >
      &raquo;
    </button>

    <select
      class="ml-4 rounded border px-2 py-1"
      :value="limit"
      @change="updateLimit($event.target.value)"
    >
      <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}개씩</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValuePage: {
    type: Number,
    required: true,
  },
  modelValueLimit: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  pageSizes: {
    type: Array,
    default: () => [10, 20, 50],
  },
})

const emit = defineEmits(['update:modelValuePage', 'update:modelValueLimit'])

const page = computed(() => props.modelValuePage)
const limit = computed(() => props.modelValueLimit)

const totalPages = computed(() => {
  return Math.max(1, Math.ceil(props.totalItems / limit.value))
})

function updatePage(newPage) {
  emit('update:modelValuePage', Number(newPage))
}

function updateLimit(newLimit) {
  emit('update:modelValueLimit', Number(newLimit))
  emit('update:modelValuePage', 1) // limit 변경 시 페이지 초기화
}
</script>
