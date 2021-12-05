<template>
  <main>
    <h1
      data-aos-delay="300"
      data-aos="fade-down"
      class="text-center text-5xl sm:text-8xl font-bold tracking-wide py-40"
    >
      Psycha is sitting
    </h1>
    <WaveSection> 
      <About />
    </WaveSection>
    <!-- section 3 -->
    <CookiesBar />
  </main>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>
