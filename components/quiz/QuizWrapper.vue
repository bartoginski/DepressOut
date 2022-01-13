<template>
  <main>
      <SingleQuestion v-for="question in questions" :key="question.question" :question="question" />
  </main>
</template>

<script>
import QuizBrain from '~/models/QuizBrain.js'
  export default {
    data() {
        return {
            quiz: new QuizBrain(),
            questions: [],
        };
    },
    mounted() {
        this.questions = this.quiz.questions;
    },
}
</script>

<style lang="scss" scoped>

</style>