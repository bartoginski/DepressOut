<template>
  <section class="w-screen py-40">
    <div class="container">
      <RectangleHeader>Pytanie {{ questionId + 1 }}</RectangleHeader>
      <h2 class="text-4xl pb-20">{{ question.question }}</h2>
      <div
        class="grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-x-[100px] lg:gap-x-[350px] gap-y-[50px] md:gap-y-[75px] lg:gap-y-[200px]"
      >
        <AnswerCard
          v-for="answer in question.answers"
          :key="answer"
          :answer-text="answer"
        >
        </AnswerCard>
      </div>
      <div class="flex justify-center mt-[75px] md:mt-[90px] lg:mt-[110px]">
        <button
          class="max-w-[525px] py-[17px] px-[100px] text-center bg-white text-4xl text-primary rounded-[20px]"
          @click="nextQestion"
        >
          Następne pytanie
        </button>
      </div>
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
    questionId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    nextQestion() {
      this.$store.commit('quiz/nextQuestion')
    },
  },
}
</script>

<style lang="scss" scoped></style>
