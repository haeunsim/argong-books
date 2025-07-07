<template>
  <div class="container">
    <h4 class="page-title">교사미션 생성</h4>
    <p class="page-subtitle">
      * 교사미션을 내용(도서, 활동 유형, 수행 기간)을 설정한 뒤, 해당 내용을 학생들에게 전달합니다.
    </p>

    <div class="space-y-6">
      <!-- 1. 기본 정보 -->
      <div class="card">
        <h2 class="card-title">
          <span class="card-number">1</span>
          <span>기본 정보</span>
        </h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label class="block text-sm font-medium text-gray-700">미션 제목 (필수)</label>
            <input
              type="text"
              placeholder="예: 5학년 2반 6월 영어책 읽기"
              class="mt-2 block w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">미션 설명 (선택)</label>
            <input
              type="text"
              placeholder="예: 3단원 마무리 독서활동"
              class="mt-2 block w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- 2. 도서 선택 -->
      <div class="card">
        <h2 class="card-title">
          <span class="card-number">2</span>
          <span>도서 선택</span>
        </h2>
        <p class="mb-4 text-sm text-red-500">* 미션 1회당 선택할 수 있는 도서는 최대 3권 입니다</p>

        <!-- 즐겨찾기 도서 -->
        <!-- book 아이템은 4개가 기본으로 보이고 prev, next 버튼으로 아이템 이동
         간단하니까 구현? swiper 사용? -->
        <h4>즐겨찾기 도서 <span>(최근 저장순)</span></h4>
        <div class="flex space-x-4 overflow-x-auto pb-4">
          <div
            v-for="book in favoriteBooks"
            :key="book.id"
            class="w-1/4 flex-shrink-0 cursor-pointer rounded-lg border p-3 shadow"
          >
            <div class="image rounded">
              <!-- <img :src="book.image" alt="book.title" /> -->
            </div>
            <div class="text-sm font-medium">{{ book.title }}</div>
            <div class="mt-1 text-xs text-gray-500">{{ book.author }}</div>
            <div class="mt-2 flex justify-between">
              <span
                class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                >{{ book.level }}</span
              >
              <div>
                <div class="text-xs text-gray-400">{{ book.words }} words</div>
                <div class="text-xs text-gray-400">{{ book.pages }} pages</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 교과연계 도서 필터 -->
        <div class="mt-6 flex gap-5">
          <v-select
            v-model="Select1"
            :items="SelectItem1"
            label="Select"
            single-line
            variant="outlined"
            hide-details
          ></v-select>
          <v-select
            v-model="Select2"
            :items="SelectItem2"
            label="Select"
            single-line
            variant="outlined"
            hide-details
          ></v-select>
          <v-select
            v-model="Select3"
            :items="SelectItem3"
            item-title="state"
            item-value="abbr"
            label="Select"
            return-object
            single-line
            variant="outlined"
            hide-details
          ></v-select>
          <button class="w-24 rounded bg-blue-600 text-white hover:bg-blue-700">검색</button>
        </div>

        <!-- 교과연계 도서 결과 -->
        <!-- <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div v-for="n in 3" :key="n" class="rounded-xl border p-4 text-center shadow">
            <div class="mb-2 flex h-28 items-center justify-center rounded bg-gray-100">
              <div class="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
            <div class="text-sm font-medium">Title</div>
            <div class="text-xs text-gray-500">Writer</div>
            <div class="mt-1 text-xs text-green-600">Level</div>
            <div class="text-xs text-gray-400">__ words • __ pages</div>
          </div>
        </div> -->

        <!-- 선택 도서 확인 -->
        <!-- <div class="mt-6 space-y-2">
          <div
            v-for="(book, index) in selectedBooks"
            :key="index"
            class="flex items-center justify-between"
          >
            <span class="whitespace-nowrap p-2 text-xs font-bold">도서 {{ index + 1 }}</span>
            <div class="flex w-full items-center justify-between border p-2 text-xs text-gray-400">
              {{ book.level }} / {{ book.title }}
              <button class="bg-gray-100 px-2 py-1 text-xs text-gray-600 hover:underline">
                선택 취소
              </button>
            </div>
          </div>
        </div> -->
      </div>

      <!-- 3. 미션유형 및 활동 -->
      <!-- <div class="card">
        <h2 class="card-title">
          <span class="card-number">3</span>
          <span>미션 유형 및 활동</span>
        </h2>
        <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="rounded-xl border p-4 shadow">
            <h6>읽기 (완독)</h6>
            <p class="mt-2 text-sm">미션도서 끝까지 읽기</p>
          </div>
          <div class="relative rounded-xl border p-4 shadow">
            <div class="absolute inset-0 rounded-xl bg-blue-300 text-center opacity-25"></div>
            <h6>읽기&말하기</h6>
            <p class="mt-2 text-sm">소리내어 읽고 녹음하기</p>
          </div>
          <div class="relative rounded-xl border p-4 shadow">
            <div class="absolute inset-0 rounded-xl bg-blue-300 text-center opacity-25"></div>
            <h6>어휘 학습</h6>
            <p class="mt-2 text-sm">새로운 단어 학습하기</p>
          </div>
        </div>
      </div> -->

      <!-- 4. 기간 설정 -->
      <!-- <div class="card">
        <h2 class="card-title">
          <span class="card-number">4</span>
          <span>기간 설정</span>
        </h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label class="block text-sm font-medium text-gray-700">미션 시작일</label>
            <input
              type="text"
              placeholder="YYYY.MM. DD"
              class="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">미션 시작일</label>
            <input
              type="text"
              placeholder="YYYY.MM. DD"
              class="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">미션 수행기간 (자동계산)</label>
            <input
              type="text"
              placeholder="___ Days"
              class="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div> -->
    </div>

    <div class="mt-10 flex justify-between">
      <button class="rounded-md border px-8 py-2 text-sm">입력 초기화</button>
      <button class="rounded-md border bg-blue-600 px-8 py-2 text-sm text-white">
        미션 생성하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const favoriteBooks = [
  {
    id: 1,
    title: 'Good for You',
    author: 'Joy Cowley',
    level: 'Starter',
    words: 62,
    pages: 10,
    image: 'https://via.placeholder.com/120x160?text=Good+for+You',
  },
  {
    id: 2,
    title: 'Puss in Boots',
    author: 'Charles Perrault',
    level: 'Level 4',
    words: 1002,
    pages: 43,
    image: 'https://via.placeholder.com/120x160?text=Puss+in+Boots',
  },
  {
    id: 3,
    title: 'The Ugly Duckling',
    author: 'Hans Christian Andersen',
    level: 'Level 1',
    words: 312,
    pages: 30,
    image: 'https://via.placeholder.com/120x160?text=Ugly+Duckling',
  },
  {
    id: 4,
    title: 'Ant, Bug and Cat',
    author: 'Douglas Voultoor',
    level: 'Level K',
    words: 42,
    pages: 10,
    image: 'https://via.placeholder.com/120x160?text=Ant+Bug+Cat',
  },
  {
    id: 5,
    title: 'Good for You',
    author: 'Joy Cowley',
    level: 'Starter',
    words: 62,
    pages: 10,
    image: 'https://via.placeholder.com/120x160?text=Good+for+You',
  },
  {
    id: 6,
    title: 'Puss in Boots',
    author: 'Charles Perrault',
    level: 'Level 4',
    words: 1002,
    pages: 43,
    image: 'https://via.placeholder.com/120x160?text=Puss+in+Boots',
  },
  {
    id: 7,
    title: 'The Ugly Duckling',
    author: 'Hans Christian Andersen',
    level: 'Level 1',
    words: 312,
    pages: 30,
    image: 'https://via.placeholder.com/120x160?text=Ugly+Duckling',
  },
]

const selectedBooks = [
  { title: 'Puss in Boots', level: 'Level 4' },
  { title: 'The Ugly Duckling', level: 'Level 1' },
  { title: 'Ant, Bug and Cat', level: 'Level K' },
]

const Select1 = ref('학년')
const SelectItem1 = ref(['3학년', '4학년', '5학년', '6학년'])

const Select2 = ref('출판사')
const SelectItem2 = ref(['출판사1', '출판사2', '출판사3', '출판사4'])

const Select3 = ref('단원명')
const SelectItem3 = ref(['단원1', '단원2', '단원3', '단원4'])
</script>

<style scoped>
.container {
  width: 100%;
}
.page-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
}
.page-subtitle {
  font-size: 1rem;
}

.image {
  width: 92px;
  height: 128px;
  background: #e2e2e2;
  margin: 0 auto 14px;
}

/* 재사용 가능한 클래스 그룹 */
.card {
  @apply rounded-md bg-white p-6 shadow;
}

.card-title {
  @apply mb-4 flex items-center space-x-2 text-lg font-semibold;
}

.card-number {
  @apply text-xl text-blue-600;
}
</style>
