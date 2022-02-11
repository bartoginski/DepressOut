<template>
  <div class="flex flex-col justify-center items-center gap-8 px-8">
    <div class="flex flex-row justify-evenly align-middle items-center gap-8">
      <div
        class="text-6xl md:w-6xl lg:text-8xl mx-auto m-10 text-center font-black p-4 md:w-96 w-50"
      >
        {{ licznik3 }} mln
      </div>
      <p
        class="text-2xl text-center w-2/4 h-56 flex justify-center items-center"
      >
        osób w Polsce cierpi na depresję, jest to aż 4% populacji Polski
      </p>
    </div>
    <div class="flex flex-col justify-center lg:flex-row md:gap-20 gap-12">
      <div
        class="flex flex-row lg:flex-col xl:flex-row text-center align-middle justify-evenly my-0 sm:my-8 w-full lg:w-2/5 md:w-2/3 mx-auto"
      >
        <div class="text-2xl w-auto mx-auto m-10 items-center sm:hidden">
          tyle kobiet zachoruje na depresje co najmniej raz w życiu
        </div>

        <div
          class="w-1/3 md:w-1/2 max-w-min flex flex-col justify-center items-center m-10 lg:m-auto lg:my-16 xl:m-10"
        >
          <img
            class="absolute w-52 md:w-60 lg:w-auto"
            src="~/assets/img/counter_circle.svg"
            alt=""
          />
          <div
            data-target="230"
            class="licznik relative text-6xl font-black p-4 w-48"
          >
            {{ licznik1 }}%
          </div>
        </div>

        <div class="text-2xl w-auto mx-auto m-10 items-center hidden sm:block">
          tyle kobiet zachoruje na depresje co najmniej raz w życiu
        </div>
      </div>

      <div
        class="flex flex-row lg:flex-col xl:flex-row text-center align-middle justify-evenly my-0 sm:my-8 w-full lg:w-2/5 md:w-2/3 mx-auto"
      >
        <div
          class="w-1/3 md:w-1/2 max-w-min flex flex-col justify-center items-center m-10 lg:m-auto lg:my-16 xl:m-10"
        >
          <img
            class="absolute w-52 md:w-60 lg:w-auto"
            src="~/assets/img/counter_circle.svg"
            alt=""
          />
          <div
            data-target="230"
            class="licznik relative text-6xl font-black p-4 w-48"
          >
            {{ licznik2 }}%
          </div>
        </div>

        <div class="text-2xl w-auto mx-auto m-10 items-center">
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
const time1 = (2 / liczba1) * 1000
const time2 = (2 / liczba2) * 1000
const time3 = (2 / liczba3 / 10) * 1000

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
