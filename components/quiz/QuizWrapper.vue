<template>
  <main>
    <SingleQuestion
      v-if="!isEnd"
      :question="questions[currentQuestion]"
      :question-id="currentQuestion"
    />
    <EndScreen v-if="isEnd" />
  </main>
</template>

<script>
import QuizBrain from '~/models/QuizBrain.js'
export default {
  data() {
    return {
      quiz: new QuizBrain(),
      questions: [],
    }
  },
  computed: {
    currentQuestion() {
      return this.$store.state.quiz.currentQuestion
    },
    isEnd() {
      return this.$store.state.quiz.currentQuestion === this.questions.length
    },
  },
  mounted() {
    this.questions = this.quiz.questions
  },
}
</script>

<style lang="scss" scoped></style>
