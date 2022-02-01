<template>
  <div class="flex flex-col justify-center items-center gap-8">
    <div class="flex flex-row justify-evenly align-middle items-center gap-8">
      <div class="text-8xl w-auto mx-auto m-10 text-center">
        {{ licznik3 }} mln
      </div>
      <p class="text-2xl text-center">
        osób w Polsce cierpi na depresję, jest to aż 4% populacji Polski
      </p>
    </div>
    <div class="flex flex-col justify-center md:flex-row">
      <div
        class="flex flex-row text-center align-middle justify-evenly my-8 w-full lg:w-2/5 md:w-2/3"
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
        class="flex flex-row text-center align-middle justify-evenly my-8 w-full lg:w-2/5 md:w-2/3"
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
  </div>
</template>

<script>

// numerki
const liczba1 = 25
const liczba2 = 10
const liczba3 = 1.5


// nvm
const time1 = 2 / liczba1 * 1000
const time2 = 2 / liczba2 * 1000
const time3 = 2 / liczba3 / 10 * 1000


// czas po jakim numerki sie odświeżą
const czas = 10000

export default {
  data() {
    return {
      licznik1: 0,
      licznik2: 0,
      licznik3: 0,
    }
  },

  watch: {
    licznik1: {
      handler(value) {
        if (value < liczba1) {
          setTimeout(() => {
            this.licznik1++
          }, time1)
        }
        setTimeout(() => {
          if (value === liczba1) {
            this.licznik1 = 0
          }
        }, czas)
      },
      immediate: true,
    },

    licznik2: {
      handler(value) {
        if (value < liczba2) {
          setTimeout(() => {
            this.licznik2++
          }, time2)
        }
        setTimeout(() => {
          if (value === liczba2) {
            this.licznik2 = 0
          }
        }, czas)
      },
      immediate: true,
    },

    licznik3: {
      handler(value) {
        if (value < liczba3) {
          setTimeout(() => {
            // this.licznik3 += 0.1
            this.licznik3 = Math.round((this.licznik3 + 0.1) * 100) / 100
          }, time3)
        }
        setTimeout(() => {
          if (value === liczba3) {
            this.licznik3 = 0
          }
        }, czas)
      },
      immediate: true,
    },
  },
}
</script>
