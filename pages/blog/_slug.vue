<template>
  <section class=" overflow-hidden">
    <Banner
      :title="article.title"
      :tags="article.tag"
      :description="article.description"
    />
    <div class="container blog-post text-lg ">
      <article class="rounded-xl -mt-16 bg-white py-10 px-3 md:px-20 md:pb-20">
        <div class="flex justify-between text-base mb-6">
          <div class="flex gap-4 items-center">
            <span class="text-sm sm:text-base">{{ article.author }}</span>
            <div class="w-3 sm:w-6 bg-primary h-0.5"></div>
            <span class="text-sm sm:text-base">{{
              formatDate(article.updatedAt)
            }}</span>
          </div>
          <Nuxt-link to="/blog" class="flex gap-1">
            <svg
              class="svg_arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>

            Wróć
          </Nuxt-link>
        </div>
        <nuxt-content :document="article" />
      </article>
      <MorePosts :posts="articles"/>
    </div>
  </section>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content("articles") // instead of $content('articles', params.slug)
            .sortBy("createdAt", "desc")
            .fetch();
        const article = await $content("articles", params.slug).fetch();
        return { articles, article };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("pl", options);
        },
    },
}
</script>

<style lang="scss">
.blog-post {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold;
  }

  h1 {
    @apply text-4xl;
  }

  h2 {
    @apply text-3xl;
  }

  h3 {
    @apply text-2xl;
  }

  h4 {
    @apply text-xl;
  }

  h5 {
    @apply text-lg;
  }

  h6 {
    @apply text-base;
  }

  ul {
    @apply ml-1;
    li {
      @apply ml-8 list-disc;

      &.task-list-item {
        @apply ml-0 list-none;
      }

      p {
        @apply py-0;
      }
    }
  }

  p {
    @apply pt-2 pb-4;
  }

  a {
    @apply text-primary hover:opacity-60 transition-opacity;

    &:hover > .svg_arrow {
      transform: translateX(-5px);
    }
  }

  .svg_arrow {
    @apply fill-current text-primary relative transition-transform w-4 h-4;
    transform: rotate(-180deg);
    top: 3px;
  }

  blockquote {
    @apply pl-4 sm:pl-10 border-l-2 border-primary my-4 text-light-gray;

    cite {
      @apply relative block ml-10;

      &:before {
        content: '';
        @apply block w-3 h-0.5 bg-primary absolute top-1/2 -left-8;
      }
    }
  }

  table {
    @apply border-collapse border border-primary w-full sm:w-auto;

    td,
    th {
      @apply border-2 p-2 border-primary;
    }
  }

  em {
    @apply text-light-gray italic;
  }

  i {
    @apply text-primary;
  }

  figcaption {
    @apply border-l-2 border-primary pl-4 text-dark-gray text-sm mb-4 italic;
  }

  strong {
    @apply font-black;
  }
}
</style>
