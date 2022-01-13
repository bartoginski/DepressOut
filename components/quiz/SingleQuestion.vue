<template>
  <section class="w-screen py-40">
    <div class="container flex flex-col">
      <h2 class="text-4xl pb-20">{{ question.question }}</h2>

      <ul>
        <li v-for="(answer, id) in question.answers" :key="answer" class="text-2xl">
          <input :id="`answer-${id}`" type="radio" name="quiz-answer" />
          <label :for="`answer-${id}`">{{ answer }}</label>
        </li>
      </ul>

      <button>Następne pytanie</button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default() {
        return { question: 'Brak pytania' }
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
