<template>
  <div class="">
    <carousel
      :per-page-custom="[
        [0, 1],
        [768, 2],
        [1200, 3],
      ]"
      :navigation-enabled="true"
      pagination-color="#28DCC3"
      class="mx-20 sm:mx-10 lg:mx-0"
    >
      <slide
        v-for="post in posts"
        :key="post.title"
        class="flex justify-center"
      >
        <NuxtLink :to="'/blog/' + post.slug">
          <div
            class="h-96 p-6 w-80 rounded-lg border-primary border-2 text-black"
          >
            <h3 class="text-center text-xl mb-4">{{ post.title }}</h3>
            <img :src="`/articles/${post.img}`" :alt="post.alt" class="h-52" />
            <p class="text-sm pt-4">{{ post.description }}</p>
          </div>
        </NuxtLink>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    posts: { type: Array, default: () => {} },
  },
}
</script>

<style lang="scss" scoped></style>
