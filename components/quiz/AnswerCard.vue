<template>
  <button
    class="relative w-5/6 md:w-full py-[30px] px-[20px] md:py-[57px] md:px-[44px] rounded-[20px] bg-white text-primary text-2xl"
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
  },
}
</script>
