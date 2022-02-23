<template>
  <div
    class="flex w-full justify-center items-center antialiased text-gray-700"
  >
    <div class="flex w-11/12 md:w-7/12 justify-center items-center">
      <div class="w-full max-x-xl">
        <div class="bg-white p-12 rounded-lg shadow-lg w-full">
          <div v-if="index < count">
            <p class="text-2xl font-bold">
              {{ questions[index]['question'] }}
            </p>
            <label
              v-for="(answer, key) in questions[index]['answers']"
              :key="answer.id"
              :for="key"
              class="block mt-4 border border-grey-300 rounded-lg py-2 px-6 text-lg"
              :class="{
                'hover:bg-gray-100 cursor-pointer': selectedAnswer == '',
                'bg-red-200': selectedAnswer == key,
                'bg-green-200':
                  key == questions[index]['correctAnswer'] &&
                  selectedAnswer != '',
              }"
            >
              <input
                :id="key"
                v-model="selectedAnswer"
                type="radio"
                class="hidden"
                :value="key"
                :disabled="selectedAnswer != ''"
                @change="answered($event)"
              />
              {{ answer }}
            </label>
            <div class="mt-5 float-root">
              <button
                v-show="selectedAnswer != '' && index < count - 1"
                class="float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded"
                @click="nextQuestion"
              >
                Następne &gt;
              </button>
              <button
                v-show="selectedAnswer != '' && index == count - 1"
                class="float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded"
                @click="showResults"
              >
                Koniec
              </button>
            </div>
          </div>
          <div v-else>
            <h2 class="text-bold 2xl text-3xl">Wynik</h2>
            <div class="flex justify-start space-x-4 mt-6">
              <p>
                Twoje poprawne odpowidzi to
                <span class="text-green-700">
                  {{ correctAnswers }}
                </span>
                na 10 :)
              </p>
            </div>
            <button
              class="float-right px-5 py-2 bg-primary text-white text-sm font-bold tracking-wide rounded"
              @click="resetQuiz"
            >
              Jeszcze raz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questions from '~/models/questions.js'
export default {
  data() {
    return {
      index: 0,
      selectedAnswer: '',
      count: 10,
      correctAnswers: 0,
      questions,
    }
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value
      if (this.selectedAnswer === this.questions[this.index].correctAnswer) {
        this.correctAnswers++
      }
    },
    nextQuestion() {
      this.index++
      this.selectedAnswer = ''
    },
    showResults() {
      this.index++
    },
    resetQuiz() {
      this.index = 0
      this.selectedAnswer = ''
      this.correctAnswers = 0
    },
  },
}
</script>

<style lang="scss" scoped></style>
