<template>
  <BaseCard>
    <div class="card-header">
      <h4>최근 열람 도서</h4>
      <div class="icon-wrap">
        <p><IconAward2 /> 교사미션 도서</p>
        <p><IconBookmarks />교과연계 도서</p>
      </div>
    </div>

    <div class="grid-wrap">
      <div class="reading-activity">
        <div class="reading-date">2025.06.08</div>

        <div class="book-thumbnail"></div>

        <div class="reading-progress">
          <span class="reading-badge badge1">1독</span>
        </div>

        <div class="reading-badges">
          <span class="badge badge-mission"><IconAward2 /></span>
          <span class="badge badge-curriculum"><IconBookmarks /></span>
        </div>
      </div>
      <div class="reading-activity">
        <div class="reading-date">2025.06.08</div>

        <div class="book-thumbnail"></div>

        <div class="reading-progress">
          <div class="progress-bar">
            <div class="progress" style="width: 40%"></div>
          </div>
          <div class="progress-text">
            <span>40%</span>
            (4/10 p)
          </div>
        </div>

        <div class="reading-badges">
          <span class="badge badge-mission"><IconAward2 /></span>
          <span class="badge badge-curriculum"></span>
        </div>
      </div>
      <div class="reading-activity">
        <div class="reading-date">2025.06.08</div>

        <div class="book-thumbnail"></div>

        <div class="reading-progress">
          <span class="reading-badge badge2">2독</span>
        </div>

        <div class="reading-badges">
          <span class="badge badge-mission"></span>
          <span class="badge badge-curriculum"></span>
        </div>
      </div>
      <div class="reading-activity">
        <div class="reading-date">2025.06.08</div>

        <div class="book-thumbnail"></div>

        <div class="reading-progress">
          <span class="reading-badge badge3">3독</span>
        </div>

        <div class="reading-badges">
          <span class="badge badge-mission"><IconBookmarks /></span>
          <span class="badge badge-curriculum"></span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../common/BaseCard.vue'
import IconAward2 from '../icons/IconAward2.vue'
import IconBookmarks from '../icons/IconBookmarks.vue'
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h4 {
    color: #292929;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.6px;
  }
}
.icon-wrap {
  display: flex;
  gap: 8px;
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 5px;
    color: #525252;
  }
}
.grid-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding-bottom: 20px;
}

.grid-wrap > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reading-activity {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.book-thumbnail {
  width: 72px;
  height: 108px;
  background: #f7f7f7;
  border-radius: 5px;
  overflow: hidden;
}

.reading-badges {
  position: absolute;
  top: 34px;
  left: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.reading-badge {
  width: 28px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}

.badge1 {
  background: url('../../assets/images/book-bg-1.png') no-repeat;
}
.badge2 {
  background: url('../../assets/images/book-bg-2.png') no-repeat;
}
.badge3 {
  background: url('../../assets/images/book-bg-3.png') no-repeat;
}

.progress-bar {
  width: 100%;
  min-width: 80px;
  height: 8px;
  background: #cff6ea;
  border-radius: 4px;
  margin-top: 4px;
  overflow: hidden;
}
.progress {
  height: 100%;
  background: #10d298;
  border-radius: 4px;
  transition: width 0.3s;
}
.progress-text {
  font-size: 12px;
  margin-top: 2px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.progress-text span {
  color: #10d298;
  font-weight: 600;
}
</style>
