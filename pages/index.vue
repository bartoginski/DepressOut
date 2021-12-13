<template>
  <main>
    <PageHeader> Psycha is sitting </PageHeader>
    <WaveSection>
      <Help />
      <About />
    </WaveSection>
    <Social />
  </main>
</template>
<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>
