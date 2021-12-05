<template>
  <button
    class="p-3 text-primary transition duration-500 ease-in-out hover:bg-gray-900 bg-transparent border-2 border-primary rounded-2xl"
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
