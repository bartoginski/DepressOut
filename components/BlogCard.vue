<template>
  <div
    data-aos="fade-in"
    data-aos-delay="300"
    class="
      rounded-3xl
      bg-white
      p-8
      md:p-11
      flex
      justify-center
      flex-col
      max-w-md
    "
  >
    <div class="flex justify-center items-center">
      <img
        class="w-3/4"
        :src="require(`~/static/articles/${article.img}`)"
        alt=""
      />
    </div>
    <div class="flex justify-between items-center py-5">
      <span class="rounded-md p-1 bg-primary text-white">{{
        article.tag
      }}</span>
      <span class="text-light-gray">Autor: {{ article.author }}</span>
    </div>
    <div>
      <h4 class="text-2xl font-bold text-black">{{ article.title }}</h4>
      <p class="text-l text-light-gray">{{ article.description }}</p>
    </div>
    <Nuxt-link
      :to="'/blog/' + article.slug"
      class="text-primary hover:opacity-70 transition-opacity"
      >Czytaj więcej</Nuxt-link
    >
    <div>
      <h1 class="text-black">{{ article.date }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
