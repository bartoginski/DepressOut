<template>
  <main>
    <PageHeader> Blog </PageHeader>

    <WaveSection>
      <div
        class="
          container
          grid grid-cols-1
          md:grid-cols-2
          gap-x-24 gap-y-10
          md:gap-y-32
        "
      >
        <BlogCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
    </WaveSection>
  </main>
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
