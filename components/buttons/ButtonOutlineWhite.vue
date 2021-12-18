<template>
  <button
    class="py-3 text-white transition duration-500 ease-in-out hover:bg-gray-900 bg-transparent border-2 border-white rounded-2xl text-center"
    @click="onclick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onclick: {
      type: Function,
      required: false,
      default: () => {}
    },
  },
}
</script>
