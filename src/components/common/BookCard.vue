<template>
  <article class="book-card">
    <div class="book-card__checkbox">
      <input
        type="checkbox"
        :id="`book-${book?.id ?? ''}`"
        class="book-checkbox"
        :checked="modelValue"
        @change="onChange"
      />
      <label :for="`book-${book?.id ?? ''}`" class="sr-only">도서 선택</label>
    </div>
    <div class="book-card__badge" v-if="book?.isCurriculum">
      <div class="curriculum-badge-placeholder">교과</div>
    </div>
    <div class="book-card__image">
      <div class="book-cover-placeholder"></div>
    </div>
    <div class="book-card__info">
      <h3 class="book-title">{{ book?.title ?? 'Title' }}</h3>
      <p class="book-author">{{ book?.author ?? 'Writer' }}</p>
      <div class="align-center flex justify-between">
        <div class="book-level">
          <span class="level-badge">Level {{ book?.level ?? '-' }}</span>
        </div>
        <div class="book-details">
          <span class="book-words">words: {{ book?.words ?? '-' }}</span>
          <span class="book-pages">pages: {{ book?.pages ?? '-' }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  book: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])

function onChange(e) {
  emit('update:modelValue', e.target.checked)
}
</script>

<style scoped>
.book-card {
  min-width: 240px;
  min-height: 240px;
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: white;
  transition: all 0.2s;
}

.book-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.book-card__checkbox {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 10;
}

.book-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.book-card__badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
}

.curriculum-badge {
  width: 2rem;
  height: 2rem;
}

.book-card__image {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1rem;
  width: 80px;
  height: 110px;
  background: #f9f9f9;
}

.book-cover {
  width: 100%;
  max-width: 120px;
  height: auto;
  border-radius: 0.25rem;
}

.book-card__info {
  /* text-align: center; */
}

.book-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.book-author {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.book-level {
  margin-bottom: 0.5rem;
}

.level-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #10b981;
  color: white;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  font-weight: 500;
}

.book-details {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: #6b7280;
}

.book-words,
.book-pages {
  flex: 1;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.curriculum-badge-placeholder {
  width: 2rem;
  height: 2rem;
  background-color: #3b82f6;
  color: white;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25rem;
  font-weight: 500;
}

.book-cover-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 0.75rem;
}

.book-cover-placeholder::before {
  content: '📚';
  font-size: 2rem;
}
</style>
