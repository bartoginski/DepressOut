<template>
  <section class="container overflow-hidden">
    <div v-swiper="swiperOption" class="" :loadtheme="true">
      <div class="swiper-wrapper">
        <div v-for="slide in slides" :key="slide['text']" class="swiper-slide">
          <div
            class=" flex flex-col w-11/12 rounded-3xl border-white border-2 text-black bg-white pt-1 px-3 md:pt-4 md:px-20 md:min-h-full"
          >
            <p class="text-base md:text-2xl mb-8 md:mb-20 font-bold text-center">
              {{ slide['text'] }}
            </p>
            <div class="flex justify-center">
              <img
                :src="require(`~/assets/img/charts/${slide['img']}.svg`)"
                alt=""
                class="mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-10 md:gap-4 mt-8 md:mt-4 mr-4 md:mr-12">
      <div
        class="button-prev rounded-md bg-white h-12 w-12 flex justify-center items-center transform rotate-180 cursor-pointer transition-all hover:bg-black"
      >
        <svg
          class="fill-current text-primary top-0 h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
      <div
        class="button-next rounded-md bg-white h-12 w-12 flex justify-center items-center cursor-pointer transition-all hover:bg-black"
      >
        <svg
          class="fill-current text-primary top-0 h-8 w-8 -rotate-180"
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
      slides: [
        {
          text: 'Myślisz że depresja nie jest problemem? Też nie zdawaliśmy sobie sprawy z powagi sytuacji, dopóki nie przeprowadziliśmy ankiety wśród naszych rówieśników. Na sto zapytanych osób 74 wypowiedziało się że zna kogoś ze stadium depresji.',
          img: 'chart_1',
        },
        {
          text: 'Ankietowanych podzieliliśmy na 3 grupy wiekowe: mniej niż 15 lat, od 15 do 20 lat, oraz powyżej 20 lat. Prztłaczająca większość respondentów jest w wieku od 15 do 20 lat.',
          img: 'chart_1',
        },
        {
          text: 'Płeć ankietowanych ',
          img: 'chart_1',
        },
      ],

      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      },
    }
  },
}
</script>

<style scoped>
.swiper-button-disabled {
  @apply opacity-50 cursor-not-allowed;
}

.swiper-slide {
  min-height: 735px;

  @media screen and (max-width: 767px) {
    min-height: 535px;
  }
}
</style>
