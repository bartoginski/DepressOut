<template>
  <section>
    <div class="container">
      <slot name="title"></slot>
      <div
        :class="`text-xl xl:text-2xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-${gap} text-center md:text-left`"
      >
        <div
          :class="`flex flex-col md:items-${align} md:justify-center gap-0 md:gap-4`"
          data-aos-delay="400"
          data-aos="fade-right"
        >
          <slot name="col-left"></slot>
        </div>
        <div
          :class="`flex flex-col md:items-${align} md:justify-center gap-0 md:gap-4`"
          data-aos-delay="400"
          data-aos="fade-left"
        >
          <slot name="col-right"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    align: {
      type: String,
      default: 'start',
    },
    gap: {
      type: String,
      default: '40',
    },
  },
}
</script>
