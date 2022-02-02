<template>
  <section class="w-full bg-primary text-white py-48 px-2 md:p-52 text-center">
    <div data-aos-delay="300" data-aos="fade-down">
      <span class="text-base uppercase">{{ tags }}</span>
      <h1 class="text-4xl mb-4">{{ title }}</h1>
      <p class="text-xl">{{ description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
