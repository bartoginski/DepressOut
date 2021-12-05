<template>
  <div
    v-if="isDisplayed"
    class="bg-light-gray p-5 fixed z-50 w-full bottom-0"
  >
    Ta strona używa ciasteczek by zapewnić ci najlepsze mozliwe doświadczenia
    <ButtonPrimary title="Zgadzam się" :onclick="closeBar" />
    <ButtonOutline title="Więcej informacji"  :onclick="() => {}"/>
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
