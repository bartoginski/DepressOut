<template>
  <section class="container">
    <div class="bg-primary text-white rounded-3xl py-16 px-10">
      <div class="flex items-center pb-16 gap-6">
        <span class="w-36">{{ formattedDate }}</span>
        <div class="flex gap-4">
          <button @click="decreaseMonth">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_732_3725)">
                <path
                  d="M1.54297 16.9198L5.9028 21.3089L15.4241 11.7876L15.4241 37L21.5785 37L21.5785 11.7876L31.0998 21.3089L35.4596 16.9198L18.5013 2.12402e-07L1.54297 16.9198Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_732_3725">
                  <rect
                    width="37"
                    height="37"
                    fill="white"
                    transform="translate(0 37) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button @click="increaseMonth">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_732_3727)">
                <path
                  d="M35.457 20.0802L31.0972 15.6911L21.5759 25.2124L21.5759 -6.06765e-07L15.4215 -8.7578e-07L15.4215 25.2124L5.90019 15.6911L1.54036 20.0802L18.4987 37L35.457 20.0802Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_732_3727">
                  <rect
                    width="37"
                    height="37"
                    fill="white"
                    transform="translate(37) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-7">
        <div v-for="day in getLastDay(actualYear, actualMonth)" :key="day">
          <!-- TODO: Add here DayCard -->
          {{ day }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      months: [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień',
      ],
      actualMonth: new Date().getMonth(),
      actualYear: new Date().getFullYear(),
    }
  },
  computed: {
    formattedDate() {
      return `${this.months[this.actualMonth]} ${this.actualYear}`
    },
  },
  methods: {
    getLastDay(year, month) {
      return new Date(year, month + 1, 0).getDate()
    },
    increaseMonth() {
      if (this.actualMonth + 1 === 12) {
        this.actualYear++
        this.actualMonth = 0
        return
      }
      this.actualMonth++
    },
    decreaseMonth() {
      if (this.actualMonth - 1 === -1) {
        this.actualYear--
        this.actualMonth = 11
        return
      }
      this.actualMonth--
    },
  },
}
</script>

<style lang="scss" scoped></style>
