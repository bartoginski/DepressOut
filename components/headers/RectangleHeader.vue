<template>
  <div :class="`container flex justify-center ${mb}`">
    <div class="relative">
      <span
        data-aos-delay="600"
        data-aos="fade-right"
        :class="`w-full h-full absolute -top-4 -left-4 sm:-top-5 sm:-left-5 border-4 ${greenBG ? 'border-primary' : 'border-white'}`"
      ></span>
      <h2
        data-aos-delay="300"
        data-aos="fade-left"
        :class="`flex flex-col justify-center items-center text-3xl sm:text-4xl lg:text-6xl p-4 sm:p-5 ${greenBG ? 'bg-primary text-white' : 'bg-white text-primary'} relative`"
      >
        <slot></slot>
        <span class="text-xl sm:text-2xl lg:text-3xl text-center block"><slot name="subtitle"></slot></span>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    'mb': {
      type: String,
      default: 'mb-12 sm:mb-16 md:mb-20'
    },
    greenBG: {
      type: Boolean,
      required: false,
      default: false,
    },
  }
}
</script>