<template>
  <div class="card" elevation="10">
    <h4 v-if="heading">{{ heading }}</h4>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: String,
})
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
  display: flex;
  flex-direction: column;
  gap: 24px;

  h4 {
    color: #292929;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.6px;
  }
}
</style>
