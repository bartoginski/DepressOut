<template>
  <main>
    <SingleQuestion :question="questions[currentQuestion]" :question-id="currentQuestion"/>
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

  },
  mounted() {
    this.questions = this.quiz.questions
  },
}
</script>

<style lang="scss" scoped></style>
