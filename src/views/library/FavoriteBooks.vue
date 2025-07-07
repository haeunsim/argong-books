<template>
  <section class="favorite-books">
    <div class="favorite-books__header">
      <h1 class="favorite-books__title">즐겨찾기 도서 : 총 36권</h1>
      <div class="favorite-books__actions">
        <button class="btn btn--curriculum">교과연계 도서</button>
        <button class="btn btn--unfavorite">즐겨찾기 해제</button>
      </div>
    </div>

    <div class="favorite-books__content">
      <div class="books-grid">
        <BookCard
          v-for="book in currentPageBooks"
          :key="book.id"
          :book="book"
          v-model="book.selected"
        />
      </div>

      <!-- 페이지네이션 -->
      <div class="pagination">
        <button
          class="pagination__btn pagination__btn--prev"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          이전
        </button>
        <div class="pagination__pages">
          <button
            v-for="page in visiblePages"
            :key="page"
            class="pagination__page"
            :class="{ 'pagination__page--active': page === currentPage }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>
        <button
          class="pagination__btn pagination__btn--next"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          다음
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import BookCard from '@/components/common/BookCard.vue'

const currentPage = ref(1)
const booksPerPage = 16
const books = ref([
  {
    id: 1,
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    level: 1,
    words: 500,
    pages: 32,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 2,
    title: "Charlotte's Web",
    author: 'E.B. White',
    level: 2,
    words: 800,
    pages: 48,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 3,
    title: 'Matilda',
    author: 'Roald Dahl',
    level: 3,
    words: 1200,
    pages: 64,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 4,
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    level: 2,
    words: 900,
    pages: 56,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 5,
    title: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    level: 3,
    words: 1500,
    pages: 72,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 6,
    title: 'Peter Pan',
    author: 'J.M. Barrie',
    level: 2,
    words: 1000,
    pages: 60,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 7,
    title: 'The Wind in the Willows',
    author: 'Kenneth Grahame',
    level: 4,
    words: 1800,
    pages: 88,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 8,
    title: 'Winnie-the-Pooh',
    author: 'A.A. Milne',
    level: 1,
    words: 600,
    pages: 40,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 9,
    title: 'The Jungle Book',
    author: 'Rudyard Kipling',
    level: 3,
    words: 1400,
    pages: 68,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 10,
    title: 'Anne of Green Gables',
    author: 'L.M. Montgomery',
    level: 4,
    words: 2000,
    pages: 96,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 11,
    title: 'The Wonderful Wizard of Oz',
    author: 'L. Frank Baum',
    level: 2,
    words: 1100,
    pages: 64,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 12,
    title: 'Pippi Longstocking',
    author: 'Astrid Lindgren',
    level: 2,
    words: 950,
    pages: 52,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 13,
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    level: 4,
    words: 2200,
    pages: 104,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 14,
    title: 'Charlie and the Chocolate Factory',
    author: 'Roald Dahl',
    level: 3,
    words: 1600,
    pages: 80,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 15,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    level: 5,
    words: 3000,
    pages: 144,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 16,
    title: 'The Phantom Tollbooth',
    author: 'Norton Juster',
    level: 3,
    words: 1700,
    pages: 84,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 17,
    title: 'Bridge to Terabithia',
    author: 'Katherine Paterson',
    level: 4,
    words: 2400,
    pages: 112,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 18,
    title: 'The Giver',
    author: 'Lois Lowry',
    level: 5,
    words: 3200,
    pages: 152,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 19,
    title: 'Number the Stars',
    author: 'Lois Lowry',
    level: 4,
    words: 2600,
    pages: 120,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 20,
    title: 'Holes',
    author: 'Louis Sachar',
    level: 3,
    words: 1800,
    pages: 88,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 21,
    title: 'The Tale of Despereaux',
    author: 'Kate DiCamillo',
    level: 3,
    words: 1900,
    pages: 92,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 22,
    title: 'Because of Winn-Dixie',
    author: 'Kate DiCamillo',
    level: 2,
    words: 1200,
    pages: 68,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 23,
    title: 'The Miraculous Journey of Edward Tulane',
    author: 'Kate DiCamillo',
    level: 4,
    words: 2800,
    pages: 128,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 24,
    title: 'Flora & Ulysses',
    author: 'Kate DiCamillo',
    level: 3,
    words: 2000,
    pages: 96,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 25,
    title: 'The One and Only Ivan',
    author: 'Katherine Applegate',
    level: 3,
    words: 2100,
    pages: 100,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 26,
    title: 'Crenshaw',
    author: 'Katherine Applegate',
    level: 3,
    words: 2200,
    pages: 104,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 27,
    title: 'Wishtree',
    author: 'Katherine Applegate',
    level: 3,
    words: 2300,
    pages: 108,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 28,
    title: 'The Wild Robot',
    author: 'Peter Brown',
    level: 3,
    words: 2400,
    pages: 112,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 29,
    title: 'The Wild Robot Escapes',
    author: 'Peter Brown',
    level: 3,
    words: 2500,
    pages: 116,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 30,
    title: 'The Last Kids on Earth',
    author: 'Max Brallier',
    level: 2,
    words: 1300,
    pages: 72,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 31,
    title: 'The Last Kids on Earth and the Zombie Parade',
    author: 'Max Brallier',
    level: 2,
    words: 1400,
    pages: 76,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 32,
    title: 'The Last Kids on Earth and the Nightmare King',
    author: 'Max Brallier',
    level: 2,
    words: 1500,
    pages: 80,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 33,
    title: 'The Last Kids on Earth and the Midnight Blade',
    author: 'Max Brallier',
    level: 3,
    words: 1600,
    pages: 84,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 34,
    title: 'The Last Kids on Earth and the Skeleton Road',
    author: 'Max Brallier',
    level: 3,
    words: 1700,
    pages: 88,
    isCurriculum: false,
    selected: false,
  },
  {
    id: 35,
    title: "The Last Kids on Earth: Quint and Dirk's Hero Quest",
    author: 'Max Brallier',
    level: 3,
    words: 1800,
    pages: 92,
    isCurriculum: true,
    selected: false,
  },
  {
    id: 36,
    title: 'The Last Kids on Earth: Thrilling Tales from the Tree House',
    author: 'Max Brallier',
    level: 2,
    words: 1900,
    pages: 96,
    isCurriculum: false,
    selected: false,
  },
])

const totalPages = computed(() => Math.ceil(books.value.length / booksPerPage))
const currentPageBooks = computed(() => {
  const start = (currentPage.value - 1) * booksPerPage
  const end = start + booksPerPage
  return books.value.slice(start, end)
})
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<style scoped>
.favorite-books {
  padding: 2rem;
}

.favorite-books__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.favorite-books__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.favorite-books__actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  background-color: #f9fafb;
}

.btn--curriculum {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.btn--curriculum:hover {
  background-color: #2563eb;
}

.btn--unfavorite {
  background-color: #ef4444;
  color: white;
  border-color: #ef4444;
}

.btn--unfavorite:hover {
  background-color: #dc2626;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .books-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .books-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .favorite-books__header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .books-grid {
    grid-template-columns: 1fr;
  }
}

/* 페이지네이션 스타일 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem 0;
}

.pagination__btn {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination__btn:hover:not(:disabled) {
  background-color: #f9fafb;
}

.pagination__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination__pages {
  display: flex;
  gap: 0.5rem;
}

.pagination__page {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination__page:hover {
  background-color: #f9fafb;
}

.pagination__page--active {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.pagination__page--active:hover {
  background-color: #2563eb;
}
</style>
