<template>
  <div>
    <h2 class="title">독서 활동 상세</h2>
    <!-- 아코디언 1. -->
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="item in activities" :key="item.type" :value="item.type">
        <v-expansion-panel-title>
          <span class="icon">{{ item.icon }}</span>
          <span class="activity-title">{{ item.title }}</span>
          <template #actions></template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <template v-if="item.data && item.data.length">
            <div v-if="item.type === 'read'">3회독</div>
            <div v-else-if="item.type === 'quiz'">
              <span style="color: green">● P:1</span>
              <span style="color: blue">● G:1</span>
              <span style="color: orange">● NB:0</span>
              <div>Perfect : 한번 이해 <span class="date">2024.07.24 18:07:00</span></div>
              <div>Good : 보통 <span class="date">2024.07.23 18:07:00</span></div>
            </div>
          </template>
          <template v-else>
            <div class="empty">활동 내역이 없습니다.</div>
          </template>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 아코디언 2. -->
    <div class="my-[60px]">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-row no-gutters>
              <v-col cols="12" md="5" class="d-flex justify-start">
                <h6>Read</h6>
              </v-col>
              <v-col cols="12" md="6" class="d-flex mt-md-0 mt-3 justify-start">
                <h6 class="text-subtitle-1">3회독</h6>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          </v-expansion-panel-text>
          <v-divider></v-divider>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-row no-gutters>
              <v-col cols="12" md="5" class="d-flex justify-start">
                <h6>Quiz</h6>
              </v-col>
              <v-col cols="12" md="6" class="d-flex mt-md-0 mt-3 justify-start">
                <h6 class="text-subtitle-1">You are currently not an owner</h6>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          </v-expansion-panel-text>
          <v-divider></v-divider>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-row no-gutters>
              <v-col cols="12" md="5" class="d-flex justify-start">
                <h6>Record</h6>
              </v-col>
              <v-col cols="12" md="6" class="d-flex mt-md-0 mt-3 justify-start">
                <h6 class="text-subtitle-1">Filtering has been entirely</h6>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          </v-expansion-panel-text>
          <v-divider></v-divider>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-row no-gutters>
              <v-col cols="10" class="d-flex mt-md-0 mt-3 justify-start">
                <h6>Words</h6>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          </v-expansion-panel-text>
          <v-divider></v-divider>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const panel = ref(['read'])

const activities = [
  {
    type: 'read',
    title: 'Read',
    icon: '📖',
    data: [{}, {}, {}], // 데이터가 있으면 버튼/내용 노출
  },
  {
    type: 'quiz',
    title: 'Quiz',
    icon: '📝',
    data: [{}, {}], // 데이터가 있으면 버튼/내용 노출
  },
  {
    type: 'record',
    title: 'Record',
    icon: '🎤',
    data: [], // 데이터가 없으면 안내문구만
  },
  {
    type: 'words',
    title: 'Words',
    icon: '🔤',
    data: [], // 데이터가 없으면 안내문구만
  },
]

function onReadMore() {
  // 더보기 기능 구현
}
function onQuizDetail() {
  // 전기 기능 구현
}
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
.icon {
  margin-right: 8px;
  font-size: 1.2rem;
}
.activity-title {
  font-weight: 600;
  font-size: 1rem;
}
.empty {
  color: #8ca0b3;
  background: #f5faff;
  border-radius: 8px;
  padding: 16px 0;
  text-align: center;
  font-size: 0.95rem;
}
.date {
  color: #888;
  font-size: 0.85em;
  margin-left: 8px;
}
</style>
