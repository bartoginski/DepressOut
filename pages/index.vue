<template>
  <main>
    <PageHeader> Psycha is sitting </PageHeader>
    <WaveSection>
      <Help />
      <About />
    </WaveSection>
    <Social />
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