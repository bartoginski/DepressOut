<template>
  <div class="dark:bg-dark-navy overflow-hidden">
    <Header />
    <Nuxt class="py-24" />
    <CookiesBar />
    <Footer />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>
