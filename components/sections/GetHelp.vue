<template>
  <SectionWrapperColumns class="text-primary">
    <template #title>
      <RectangleHeader :green="true">Daj sobie pomóc</RectangleHeader>
    </template>
    <template #col-left>
      <p class="flex flex-col justify-center items-center">
        Wraz z całym zespołem działamy w pocie czoła, by stworzyć dla
        użytkowników przyjemną przestrzeń, gdzie każdy będzie mógł znaleźć
        pomoc. Czy to będzie informacyjny post na blogu, adres specjalisty, czy
        nawet telefon pomocy w krytycznych sytuacjach.
        <img class="md:hidden my-6 w-1/2" src="~/assets/img/sections/what_and_how3.svg" alt="">
        DepressOut oferuje założenie prywatnego profilu, w którym
        użytkownicy mogą śledzić swój nastrój w ciągu dnia, tygodnia a nawet
        miesiąca, dzięki czemu łatwiej będzie rozpoznać stopień zaawansowania
        depresji i podpowiedzieć najlepsze sposoby radzenia sobie z problemem.
      </p>
    </template>
    <template #col-right>
      <img
        class="hidden md:block"
        src="~/assets/img/sections/what_gethelp.svg"
        alt=""
      />
    </template>
  </SectionWrapperColumns>
</template>


