<template>
  <div class="flex flex-col justify-center items-center lg:flex-row gap-4">
    <div
      class="flex flex-row text-center align-middle justify-evenly m-8 w-full lg:w-2/5 md:w-2/3"
    >
      <div class="w-max flex flex-col justify-center items-center m-10">
        <img class="absolute" src="~/assets/img/counter_circle.svg" alt="" />
        <div
          data-target="230"
          class="licznik relative text-6xl font-black p-12"
        >
          {{ licznik1 }}%
        </div>
      </div>

      <div class="text-2xl w-auto mx-auto m-10">
        tyle kobiet zachoruje na depresje co najmniej raz w życiu
      </div>
    </div>

    <div
      class="flex flex-row text-center align-middle justify-evenly m-8 w-full lg:w-2/5 md:w-2/3"
    >
      <div class="w-max flex flex-col justify-center items-center m-10">
        <img class="absolute" src="~/assets/img/counter_circle.svg" alt="" />
        <div
          data-target="230"
          class="licznik relative text-6xl font-black p-12"
        >
          {{ licznik2 }}%
        </div>
      </div>

      <div class="text-2xl mx-auto m-10 flex flex-col">
        <p>tylu mezczyzn zachoruje na depresje co najmniej raz w życiu</p>
      </div>
    </div>
  </div>
</template>

<script>
const liczba1 = +30
const liczba2 = +25

export default {
  data() {
    return {
      licznik1: 0,
      licznik2: 0,
    }
  },

  watch: {
    licznik1: {
      handler(value) {
        if (value < liczba1) {
          setTimeout(() => {
            this.licznik1++
          }, 100)
        }
      },
      immediate: true,
    },

    licznik2: {
      handler(value) {
        if (value < liczba2) {
          setTimeout(() => {
            this.licznik2++
          }, 100)
        }
      },
      immediate: true,
    },
  },
}
</script>
