<template>
  <button
    class="relative w-5/6 md:w-full py-[30px] px-[20px] md:py-[57px] md:px-[44px] rounded-[20px] bg-white text-primary text-2xl"
    @click="checkAnswer"
  >
    <div
      class="absolute w-full h-full border-2 border-white rounded-[20px] top-[-11px] left-[-14px]"
    ></div>
    <div class="">
      {{ answerText }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    answerText: {
      type: String,
      required: true,
    },
    answerLetter: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    checkAnswer() {
      this.isCorrect && this.$store.commit('quiz/addPoint')
      this.$nuxt.$emit('next-qestion')
      // this.$store.commit('quiz/nextQuestion')
    },
  },
}
</script>
