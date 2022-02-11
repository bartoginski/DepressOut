<template>
  <section class="w-screen py-40">
    <div class="container flex flex-col">
     <RectangleHeader>Pytanie {{ currentQuestion }}</RectangleHeader>
      <h2 class="text-4xl pb-20">{{ question.question }}</h2>
      <div
        v-for="(answer, id) in question.answers"
        :key="answer"
        class="text-2xl"
      >
        <p>{{ answer }} - {{ id }}</p>
      </div>
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
                return { question: "Brak pytania" };
            },
        },
    },
    data() {
        return {
            currentQuestion: 0
        };
    },
}
</script>

<style lang="scss" scoped></style>
