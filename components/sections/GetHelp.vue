<template>
  <SectionWrapperColumns class="text-primary">
    <template #title>
      <RectangleHeader :green="true">Daj sobie pomóc</RectangleHeader>
    </template>
    <template #col-left>
      <p class="flex flex-col justify-center items-center">
        Depresja nie jest powodem do wstydu. Według badań WHO (Światowej
        Organizacji Zdrowia) do 2030 roku depresja będzie najczęstszą chorobą na
        świecie. Ponad to, depresja jest na czwartym miejscu listy
        najpoważniejszych chorób i jedną z głównych przyczyn samobójstw.

        <img
          class="md:hidden my-6 w-1/2"
          src="~/assets/img/sections/what_and_how3.svg"
          alt=""
        />
        Wraz z całym zespołem działamy w pocie czoła, by stworzyć dla
        użytkowników przyjemną przestrzeń, gdzie każdy będzie mógł znaleźć
        pomoc. Czy to będzie informacyjny post na blogu, adres specjalisty, czy
        nawet telefon pomocy w krytycznych sytuacjach. Dołączenie do DepressOut
        nic nie kosztuje, a daje możliwość skorzystania z profecjonalnej pomocy
        specjalistów.
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


