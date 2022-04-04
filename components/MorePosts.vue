<template>
  <section class="container overflow-hidden">
    <h1 class="text-center mb-6">Zobacz także inne posty</h1>
    <div v-swiper="swiperOption" class="" :loadtheme="true">
      <div class="swiper-wrapper">
        <div v-for="post in posts" :key="post.title" class="swiper-slide">
          <NuxtLink
            :to="'/blog/' + post.slug"
            class="h-112 lg:h-96 p-6 w-3/4 sm:w-11/12 rounded-lg border-primary border-2"
          >
            <div class="text-black flex flex-col justify-center">
              <h3 class="text-center text-xl mb-4">{{ post.title }}</h3>
              <img
                :src="`/articles/${post.img}`"
                :alt="post.alt"
                class="h-52"
              />
              <p class="text-sm lg:text-base lg:text-center pt-4">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-10 md:gap-4 mt-8 md:mt-4 mr-4">
      <div
        class="button-prev rounded-md bg-primary h-12 w-12 md:h-8 md:w-8 flex justify-center items-center transform rotate-180 cursor-pointer transition-all hover:bg-black"
      >
        <svg
          class="fill-current text-white top-0 h-8 w-8 md:h-4 md:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
      <div
        class="button-next rounded-md bg-primary h-12 w-12 md:h-8 md:w-8 flex justify-center items-center cursor-pointer transition-all hover:bg-black"
      >
        <svg
          class="fill-current text-white top-0 h-8 w-8 md:h-4 md:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  props: {
    posts: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>

<style scoped></style>
