<template>
  <main>
    <h1
      data-aos-delay="300"
      data-aos="fade-down"
      class="text-center text-5xl sm:text-8xl font-bold tracking-wide py-40"
    >
      Psycha is sitting
    </h1>
    <div>
      <img src="~/assets/img/wave_top.svg" alt="" class="w-screen" />
      <!-- temporary set height for div -->
      <div class="h-screen bg-primary">
        <!-- Add sections below -->
        <!-- section 1 -->
        <!-- section 2 -->
        <About />
      </div>
      <img src="~/assets/img/wave_bottom.svg" alt="" class="w-screen" />
    </div>
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
