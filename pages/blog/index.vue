<template>
  <WaveSection>
    <div class="container grid grid-cols-2 gap-x-24 gap-y-32">
      <BlogCard
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
      <!-- <pre>{{ article }}</pre> -->
    </div>
  </WaveSection>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
  },
}
</script>
