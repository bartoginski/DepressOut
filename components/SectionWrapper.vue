<template>
  <section>
    <div class="container">
      <slot name="title"></slot>
      <div
        data-aos-delay="400"
        data-aos="fade-in"
        :class="`text-xl xl:text-2xl flex flex-col justify-center items-${align} gap-${gap}`"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gap: {
      type: String,
      default: '5',
    },
    align: {
      type: String,
      default: 'center',
    },
  },
}
</script>
