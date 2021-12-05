<template>
  <button
    class="p-3 text-primary hover:bg-gray-900 bg-transparent border-2 border-primary rounded-2xl"
    @click="onclick"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    onclick: {
      type: Function,
      required: false,
      default: () => {}
    },
  },
}
</script>
