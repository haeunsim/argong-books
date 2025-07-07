<template>
  <header class="header">
    <div class="inner">
      <div class="logo">📚Books</div>

      <nav class="nav">
        <ul class="menu">
          <li><RouterLink :to="{ name: 'readingDashboard' }">우리반 독서활동</RouterLink></li>
          <li><RouterLink :to="{ name: 'missionCreate' }">교사미션</RouterLink></li>
          <li><RouterLink :to="{ name: 'favoriteBooks' }">소장도서 열람</RouterLink></li>
          <li><RouterLink :to="{ name: 'classView' }">수업보기</RouterLink></li>
        </ul>

        <div class="setting-wrap">
          <p>알공 초등학교</p>

          <!-- <select class="select-container">
            <option value="1">1학년 1반</option>
            <option value="2">2학년 2반</option>
            <option value="3">3학년 3반</option>
            <option value="4">4학년 4반</option>
          </select> -->
          <v-select
            class="select-container"
            :items="classOptions"
            item-title="title"
            item-value="value"
            variant="outlined"
            v-model="selectedClass"
            hide-details
          ></v-select>

          <ul class="icon-menu">
            <li><IconSetting /></li>
            <li><IconQuestion /></li>
            <li><IconLogout /></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import IconSetting from '../icons/IconSetting.vue'
import IconQuestion from '../icons/IconQuestion.vue'
import IconLogout from '../icons/IconLogout.vue'

const classOptions = [
  { title: '1학년 1반', value: 1 },
  { title: '2학년 2반', value: 2 },
  { title: '3학년 3반', value: 3 },
  { title: '4학년 4반', value: 4 },
]
const selectedClass = ref(1)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  background-color: #fff;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */

  .inner {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
}

.logo {
  width: 126px;
  font-size: 20px;
  font-weight: bold;
  color: #3375d6;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 32px; */
}

.menu,
.icon-menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu li {
  position: relative;
  width: 118px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  color: #333;
}
.menu .router-link-exact-active {
  color: #1976d2 !important;
  font-weight: bold;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 2px solid #1976d2;
  }
}

.icon-menu {
  gap: 20px;
}
.icon-menu li {
  font-size: 20px;
  cursor: pointer;
}

.setting-wrap {
  display: flex;
  align-items: center;
  gap: 32px;
}

/* select.select-container {
  width: 230px;
  border-radius: 35px;
  border: 1px solid var(--GrayScale-Gray300, #bababa);
  background: var(--GrayScale-White, #fff);
  padding: 7px 18px;

  option {
    padding: 7px 18px;
  }
} */

::v-deep(.select-container .v-field) {
  width: 230px;
  border-radius: 35px !important;
  /* border: 1px solid #bababa !important; */
  background: #fff !important;
  padding: 0 18px !important;
  min-height: 38px !important; /* 원하는 높이로 */
  height: 38px !important; /* 원하는 높이로 */
  box-sizing: border-box;
  align-items: center;
}

::v-deep(.select-container .v-field__input) {
  min-height: 38px !important;
  height: 38px !important;
  line-height: 38px !important;
  padding: 0 !important;
  display: flex;
  align-items: center;
}

::v-deep(.select-container .v-select__selection-text) {
  line-height: 38px !important;
  height: 38px !important;
  padding: 0 !important;
  display: flex;
  align-items: center;
}
</style>
