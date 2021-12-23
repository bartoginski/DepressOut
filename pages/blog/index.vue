<template>
  <!-- temporary added mb -->
  <!-- TODO: Delete it after adding new section -->
  <main class="overflow-hidden">
    <PageHeader> Blog </PageHeader>
    <WaveSection class="">
      <div class="container">
        <div class="flex justify-center mb-10">
          <div
            class="flex bg-white p-2 rounded-lg"
            data-aos-delay="200"
            data-aos="fade-center"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1199 0.160034C6.35301 0.160034 0.879883 5.63316 0.879883 12.4C0.879883 19.1669 6.35301 24.64 13.1199 24.64C15.5358 24.64 17.7718 23.9313 19.6674 22.7275L28.5099 31.57L31.5699 28.51L22.8399 19.8025C24.4093 17.7438 25.3599 15.1928 25.3599 12.4C25.3599 5.63316 19.8868 0.160034 13.1199 0.160034ZM13.1199 3.04003C18.3033 3.04003 22.4799 7.2166 22.4799 12.4C22.4799 17.5835 18.3033 21.76 13.1199 21.76C7.93645 21.76 3.75988 17.5835 3.75988 12.4C3.75988 7.2166 7.93645 3.04003 13.1199 3.04003Z"
                fill="#727272"
              />
            </svg>
            <input
              v-model="searchValue"
              type="text"
              class="mx-4 placeholder:text-light-gray text-black px-1"
              placeholder="Szukaj"
              autofocus
            />
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-24 gap-y-10 md:gap-y-32 h-full"
        >
          <BlogCard
            v-for="article in searchArticle"
            :key="article.slug"
            :article="article"
          />
        </div>
        <h2
          v-if="searchArticle.length === 0"
          data-aos-delay="200"
          data-aos="fade-center"
          class="text-6xl text-center py-20"
        >
          Nie znaleziono postów :((
        </h2>
      </div>
    </WaveSection>
    <CTA />
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
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    searchArticle() {
      return this.articles.filter((el) => {
        if (this.searchValue.trim() !== '') {
          return el.title.toLowerCase().includes(this.searchValue.toLowerCase())
        }
        return true
      })
    },
  },
}
</script>
