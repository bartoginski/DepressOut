<template>
  <button
    class="p-3 text-white bg-primary transition duration-500 ease-in-out hover:bg-gray-900 border-2 border-transparent rounded-2xl"
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
      default: () => {},
    },
  },
}
</script>
