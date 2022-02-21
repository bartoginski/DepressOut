<template>
  <div>End of quizz, points: {{ points }}</div>
</template>

<script>
export default {
  computed: {
    points() {
      return this.$store.state.quiz.points
    },
  },
}
</script>

<style lang="scss" scoped></style>
