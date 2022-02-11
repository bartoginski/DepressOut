<template>
  <div>
    {{ answerText }}
  </div>
</template>

<script>
export default {
  props: {
    answerText: {
      type: String,
      required: true,
    },
  },
}
</script>
