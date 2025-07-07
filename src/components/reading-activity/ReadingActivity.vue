<template>
  <BaseCard :heading="heading">
    <div class="flex justify-between">
      <div class="item">
        <div class="icon-wrap"><IconBook /></div>
        <div class="text-wrap">
          <p class="label">{{ firstLabel }}</p>
          <p class="value">9.8</p>
        </div>
      </div>
      <div class="item">
        <div class="icon-wrap"><IconVoice /></div>
        <div class="text-wrap">
          <p class="label">총 발화 문장</p>
          <p class="value">6758</p>
        </div>
      </div>
      <div class="item">
        <div class="icon-wrap"><IconAward /></div>
        <div class="text-wrap">
          <p class="label">미션 완료 (%)</p>
          <p class="value">78.4</p>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseCard from '../common/BaseCard.vue'
import IconBook from '../icons/IconBook.vue'
import IconVoice from '../icons/IconVoice,.vue'
import IconAward from '../icons/IconAward.vue'

const props = defineProps({
  heading: String,
  firstLabel: String,
})
</script>

<style scoped lang="scss">
.item {
  border-radius: 20px;
  background: var(--LMS-Color-Sub_Light, #f1f8ff);
  display: flex;
  width: 112px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.icon-wrap {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50px;
}
.text-wrap {
  text-align: center;
}
.label {
  color: var(--Color-System-Gray-Scale-Gray-900, var(--Gray-Scale-Gray-900, #292929));
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.6px;
}
.value {
  color: var(--Color-System-LMS-Blue-600_Main, #3d90ef);
  font-size: 32px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.6px;
}
</style>
