<template>
  <SectionWrapper>
    <template #title>
      <RectangleHeader>Objawy depresji</RectangleHeader>
    </template>
    <template #content>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24">
        <div>
          <h3 class="md:text-6xl text-4xl pb-6">Biologiczne</h3>
          <ul>
            <li>Uczucie smutku, żal</li>
            <li>Poczucie braku własnej wartości, bezsilność</li>
            <li>Poczucie lęku i/lub winy</li>
            <li>Płaczliwość, frustracja, drażliwość, wpadanie w gniew</li>
            <li>Brak nadzei</li>
            <li>Utrata chęci do życia</li>
          </ul>
        </div>
        <div>
          <h3 class="md:text-6xl text-4xl pb-6">Psychologiczne</h3>
          <ul>
            <li>Wyraźny spadek lub wzrost wagi</li>
            <li>Bezsenność lub nadmierna senność</li>
            <li>Problemy z koncentracją</li>
            <li>Spadek sprawności myślenia</li>
          </ul>
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>

<style lang="scss" scoped>
ul {
    li {
        @apply ml-8 relative pb-2 md:pb-4;
        &:before {
            content: '';
            top: 5px;
            @apply absolute h-2 w-2 md:h-3 md:w-3 bg-white rounded-full -left-4 top-2 md:top-2 md:-left-6;
        }
    }
}
</style>