<template>
  <button
    class="py-3 text-white transition duration-500 ease-in-out hover:bg-primary-light bg-transparent border-2 border-white hover:border-transparent rounded-2xl text-center"
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
