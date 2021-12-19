<template>
  <div
    v-if="isDisplayed"
    class="
      bg-light-gray
      p-3
      md:px-10
      fixed
      z-50
      w-full
      bottom-0
      text-xl
      flex
      justify-between
      md:justify-evenly
      text-white
      items-center
      gap-2
      md:gap-0
    "
  >
    <span class="py-0 md:px-10 md:py-4 text-center md:text-xl text-xl">
      Ta strona używa ciasteczek by zapewnić ci najlepsze mozliwe doświadczenia
    </span>
    <div class="flex justify-evenly gap-5 md:gap-14 flex-col md:flex-row">
      <ButtonPrimary
        class="
          text-sm
          md:text-xl
          py-8
          md:py-2
          px-10
          md:px-8
          whitespace-nowrap
          md:whitespace-normal
        "
        :onclick="closeBar"
        >Zgadzam się</ButtonPrimary
      >
      <ButtonOutline
        class="
          text-sm
          md:text-xl
          py-6
          md:py-2
          px-10
          md:px-8
          whitespace-nowrap
          md:whitespace-normal
        "
        :onclick="() => {}"
        >Więcej informacji</ButtonOutline
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDisplayed() {
      return this.$store.state.isCookiesDisplayed
    },
  },
  methods: {
    closeBar() {
      this.$store.commit('closeCookies')
    },
  },
}
</script>

<style lang="scss" scoped></style>
