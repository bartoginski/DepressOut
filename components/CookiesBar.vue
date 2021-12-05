<template>
  <div
    v-if="isDisplayed"
    class="bg-light-gray p-3 px-40 fixed z-50 w-full bottom-0 text-xl flex justify-between text-white"
  >
    <span class="py-4 space-x-2">
    Ta strona używa ciasteczek by zapewnić ci najlepsze mozliwe doświadczenia
    </span>
    <div class="flex justify-between gap-14">
    <ButtonPrimary :onclick="closeBar">Zgadzam się</ButtonPrimary>
    <ButtonOutline :onclick="() => {}">Więcej informacji</ButtonOutline>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisplayed: true,
    }
  },
  methods: {
    closeBar() {
      this.isDisplayed = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
