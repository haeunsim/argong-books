<script setup>
import { ref } from 'vue'
// lucide-vue 아이콘 사용 (설치 안 되어 있으면 이모지로 대체 가능)
import {
  Brain,
  HelpCircle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Lightbulb,
  Sparkles,
} from 'lucide-vue-next'

const gameState = ref('intro')
const currentQuestion = ref('')
const questionNumber = ref(0)
const answers = ref([])
const finalGuess = ref('')
const guessReasoning = ref('')
const isCorrect = ref(false)
const thinking = ref(false)
const aiThinking = ref('')

// LLM API를 통해 실시간 질문 생성 함수 추가
async function fetchLLMQuestion(answersArr) {
  const prompt = `\n나는 캐릭터 스무고개 게임의 AI야.\n지금까지의 질문과 답변은 다음과 같아:\n${answersArr.map((a, i) => `Q${i + 1}: ${a.question} / A: ${a.answer === 'yes' ? '예' : '아니오'}`).join('\n')}\n캐릭터를 더 정확히 추론하기 위해 다음에 할만한 가장 효과적인 한 가지 질문을 한국어로 만들어줘. \n단, 이미 했던 질문은 반복하지 마.\n오직 질문만 출력해.`
  const response = await fetch('http://localhost:3001/api/llm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  })
  const data = await response.json()
  return data.question
}

// generateNextQuestion 함수 수정: LLM API로 질문 생성
const generateNextQuestion = async (answersArr) => {
  thinking.value = true
  aiThinking.value = 'AI가 다음 질문을 생각하고 있어요...'
  const question = await fetchLLMQuestion(answersArr)
  thinking.value = false
  return question
}

// LLM API를 통해 실시간 캐릭터 추론 함수 추가
async function fetchLLMGuess(answersArr) {
  const prompt = `\n나는 캐릭터 스무고개 게임의 AI야.\n지금까지의 질문과 답변은 다음과 같아:\n${answersArr.map((a, i) => `Q${i + 1}: ${a.question} / A: ${a.answer === 'yes' ? '예' : '아니오'}`).join('\n')}\n위 답변을 바탕으로 네가 생각하는 가장 그럴듯한 캐릭터(사람, 만화, 게임, 영화 등 모두 가능)를 한 명만 한국어로 추론해서 이름만 출력해줘.`
  const response = await fetch('http://localhost:3001/api/llm', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  })
  const data = await response.json()
  return data.question
}

// makeAIGuess 함수 수정: LLM API로 캐릭터 추론
const makeAIGuess = async (allAnswers) => {
  thinking.value = true
  aiThinking.value = '답변들을 분석하고 있어요...'
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const character = await fetchLLMGuess(allAnswers)
  finalGuess.value = character
  guessReasoning.value = 'AI가 실시간 답변을 바탕으로 추론한 결과입니다.'
  thinking.value = false
  gameState.value = 'guessing'
}

const generateReasoning = (answersArr, guess) => {
  const yesAnswers = answersArr.filter((a) => a.answer === 'yes')
  const noAnswers = answersArr.filter((a) => a.answer === 'no')
  return `답변을 분석한 결과:
• 긍정적 특징: ${yesAnswers
    .slice(0, 3)
    .map((a) => a.question)
    .join(', ')}
• 부정적 특징: ${noAnswers
    .slice(0, 2)
    .map((a) => a.question)
    .join(', ')}
• 추론 신뢰도: ${Math.round(guess.confidence * 100)}%

이러한 특징들을 종합하여 \"${guess.character}\"로 추론했습니다.`
}

const startGame = () => {
  gameState.value = 'playing'
  questionNumber.value = 1
  answers.value = []
  generateNextQuestion([]).then((q) => (currentQuestion.value = q))
}

const handleAnswer = async (answer) => {
  const newAnswers = [...answers.value, { question: currentQuestion.value, answer }]
  answers.value = newAnswers
  if (questionNumber.value >= 20) {
    await makeAIGuess(newAnswers)
  } else {
    questionNumber.value += 1
    const nextQuestion = await generateNextQuestion(newAnswers)
    currentQuestion.value = nextQuestion
  }
}

const handleGuessResult = (correct) => {
  isCorrect.value = correct
  gameState.value = 'result'
}

const resetGame = () => {
  gameState.value = 'intro'
  currentQuestion.value = ''
  questionNumber.value = 0
  answers.value = []
  finalGuess.value = ''
  guessReasoning.value = ''
  isCorrect.value = false
  thinking.value = false
  aiThinking.value = ''
}
</script>

<template>
  <div v-if="gameState === 'intro'">
    <div
      class="mx-auto max-w-2xl rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 p-6 shadow-lg"
    >
      <div class="mb-8 text-center">
        <div class="mb-4 flex items-center justify-center">
          <Brain class="mr-2 h-16 w-16 text-purple-600" />
          <Sparkles class="h-8 w-8 text-yellow-500" />
        </div>
        <h1 class="mb-2 text-3xl font-bold text-gray-800">🧠 AI 캐릭터 추론 게임</h1>
        <p class="text-lg text-gray-600">
          실시간 AI 추론으로 당신이 생각한 캐릭터를 맞춰보겠습니다!
        </p>
      </div>
      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h2 class="mb-4 text-center text-xl font-semibold">🚀 실시간 AI 추론의 특징</h2>
        <div class="space-y-3 text-gray-700">
          <div class="flex items-start">
            <Sparkles class="mr-2 mt-0.5 h-5 w-5 text-yellow-500" />
            <span>AI가 실시간으로 당신의 답변을 분석해서 다음 질문을 생성</span>
          </div>
          <div class="flex items-start">
            <Brain class="mr-2 mt-0.5 h-5 w-5 text-purple-500" />
            <span>지능적인 추론으로 패턴을 파악하고 캐릭터 추측</span>
          </div>
          <div class="flex items-start">
            <Lightbulb class="mr-2 mt-0.5 h-5 w-5 text-blue-500" />
            <span>추론 과정과 근거를 상세히 설명</span>
          </div>
          <div class="flex items-start">
            <HelpCircle class="mr-2 mt-0.5 h-5 w-5 text-green-500" />
            <span>실존인물, 애니메이션, 게임, 영화 캐릭터 등 모든 분야 지원</span>
          </div>
        </div>
      </div>
      <button
        @click="startGame"
        class="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-semibold text-white shadow-md transition-all duration-200 hover:from-purple-700 hover:to-blue-700"
      >
        <Sparkles class="mr-2 h-5 w-5" />
        AI 추론 게임 시작! 🚀
      </button>
    </div>
  </div>
  <div v-else-if="gameState === 'playing'">
    <div
      class="mx-auto max-w-2xl rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 p-6 shadow-lg"
    >
      <div class="mb-6 text-center">
        <div class="mb-4 flex items-center justify-center">
          <Brain class="mr-2 h-8 w-8 text-purple-600" />
          <h1 class="text-2xl font-bold text-gray-800">AI 질문 {{ questionNumber }}/20</h1>
          <Sparkles class="ml-2 h-6 w-6 text-yellow-500" />
        </div>
        <div class="mb-4 h-3 w-full rounded-full bg-gray-200">
          <div
            class="h-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500"
            :style="{ width: (questionNumber / 20) * 100 + '%' }"
          ></div>
        </div>
      </div>
      <div v-if="thinking" class="py-12 text-center">
        <div class="mb-4 flex items-center justify-center">
          <Brain class="h-16 w-16 animate-pulse text-purple-600" />
          <Sparkles class="ml-2 h-8 w-8 animate-bounce text-yellow-500" />
        </div>
        <p class="mb-2 text-xl text-gray-700">🤖 AI 추론 중...</p>
        <p class="text-gray-500">{{ aiThinking }}</p>
        <div class="mt-4 flex justify-center">
          <div class="h-8 w-8 animate-spin rounded-full border-b-2 border-purple-600"></div>
        </div>
      </div>
      <div v-else class="mb-6 rounded-lg bg-white p-8 shadow-md">
        <div class="mb-8 text-center">
          <HelpCircle class="mx-auto mb-4 h-12 w-12 text-blue-500" />
          <h2 class="mb-4 text-xl font-semibold text-gray-800">
            {{ currentQuestion }}
          </h2>
          <p class="text-sm text-gray-500">AI가 실시간으로 생성한 질문입니다</p>
        </div>
        <div class="flex justify-center gap-4">
          <button
            @click="handleAnswer('yes')"
            class="flex items-center justify-center rounded-lg bg-green-500 px-8 py-4 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-green-600"
          >
            <CheckCircle class="mr-2 h-5 w-5" />
            예
          </button>
          <button
            @click="handleAnswer('no')"
            class="flex items-center justify-center rounded-lg bg-red-500 px-8 py-4 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-red-600"
          >
            <XCircle class="mr-2 h-5 w-5" />
            아니오
          </button>
        </div>
      </div>
      <div v-if="answers.length > 0 && !thinking" class="rounded-lg bg-white p-4 shadow-md">
        <h3 class="mb-2 flex items-center font-semibold text-gray-700">
          <Sparkles class="mr-1 h-4 w-4 text-yellow-500" />
          AI가 학습한 답변들:
        </h3>
        <div class="max-h-32 space-y-1 overflow-y-auto">
          <div
            v-for="(answer, index) in answers.slice(-3)"
            :key="index"
            class="flex items-center text-sm text-gray-600"
          >
            <span class="mr-2 font-medium">Q{{ answers.length - 2 + index }}:</span>
            <span class="flex-1 truncate">{{ answer.question }}</span>
            <span
              :class="[
                'ml-2 rounded px-2 py-1 text-xs',
                answer.answer === 'yes' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700',
              ]"
            >
              {{ answer.answer === 'yes' ? '예' : '아니오' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="gameState === 'guessing'">
    <div
      class="mx-auto max-w-2xl rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 p-6 shadow-lg"
    >
      <div class="mb-8 text-center">
        <div class="mb-4 flex items-center justify-center">
          <Brain class="h-16 w-16 text-purple-600" />
          <Sparkles class="ml-2 h-8 w-8 text-yellow-500" />
        </div>
        <h1 class="mb-4 text-2xl font-bold text-gray-800">🎯 AI 추론 결과</h1>
        <p class="text-gray-600">실시간 분석을 완료했습니다!</p>
      </div>
      <div class="mb-6 rounded-lg bg-white p-8 text-center shadow-md">
        <div class="mb-4 text-4xl">🧠</div>
        <h2 class="mb-4 text-2xl font-bold text-gray-800">AI가 추론한 캐릭터는...</h2>
        <div class="mb-6 text-3xl font-bold text-purple-600">
          {{ finalGuess }}
        </div>
        <div class="mb-6 rounded-lg bg-gray-50 p-4 text-left">
          <h3 class="mb-2 flex items-center font-semibold text-gray-700">
            <Lightbulb class="mr-1 h-4 w-4 text-blue-500" />
            AI 추론 과정:
          </h3>
          <p class="whitespace-pre-line text-sm text-gray-600">
            {{ guessReasoning }}
          </p>
        </div>
        <p class="mb-8 text-gray-600">AI의 추론이 맞나요?</p>
        <div class="flex justify-center gap-4">
          <button
            @click="handleGuessResult(true)"
            class="flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-600"
          >
            <CheckCircle class="mr-2 h-5 w-5" />
            정답이에요! 🎉
          </button>
          <button
            @click="handleGuessResult(false)"
            class="flex items-center justify-center rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-600"
          >
            <XCircle class="mr-2 h-5 w-5" />
            틀렸어요 😅
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="gameState === 'result'">
    <div
      class="mx-auto max-w-2xl rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 p-6 shadow-lg"
    >
      <div class="mb-8 text-center">
        <div v-if="isCorrect">
          <div class="mb-4 text-6xl">🎉</div>
          <h1 class="mb-4 text-3xl font-bold text-green-600">AI 추론 성공!</h1>
          <p class="text-lg text-gray-700">
            와! AI가 실시간 추론으로 <strong>{{ finalGuess }}</strong
            >를 정확히 맞췄습니다!<br />
            인공지능의 힘을 느껴보세요! 🧠✨
          </p>
        </div>
        <div v-else>
          <div class="mb-4 text-6xl">🤖</div>
          <h1 class="mb-4 text-3xl font-bold text-orange-600">아직 학습이 필요해요!</h1>
          <p class="text-lg text-gray-700">
            이번엔 AI 추론이 빗나갔네요! 더 많은 데이터로 학습하면 더 정확해질 거예요.<br />
            다시 도전해서 AI를 훈련시켜주세요! 🚀
          </p>
        </div>
      </div>
      <div class="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h3 class="mb-4 flex items-center justify-center text-center font-semibold text-gray-700">
          <Sparkles class="mr-1 h-5 w-5 text-yellow-500" />
          AI 분석 리포트
        </h3>
        <div class="grid grid-cols-2 gap-4 text-center">
          <div>
            <div class="text-2xl font-bold text-purple-600">{{ answers.length }}</div>
            <div class="text-sm text-gray-600">분석한 답변 수</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-blue-600">
              {{ answers.filter((a) => a.answer === 'yes').length }}
            </div>
            <div class="text-sm text-gray-600">긍정 특징</div>
          </div>
        </div>
        <div class="mt-4 text-center">
          <div class="text-lg font-semibold text-gray-700">
            최종 추론: <span class="text-purple-600">{{ finalGuess }}</span>
          </div>
        </div>
      </div>
      <button
        @click="resetGame"
        class="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-semibold text-white shadow-md transition-all duration-200 hover:from-purple-700 hover:to-blue-700"
      >
        <RotateCcw class="mr-2 h-5 w-5" />
        AI와 다시 플레이하기 🧠
      </button>
    </div>
  </div>
</template>
