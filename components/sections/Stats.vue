<template>
  <SectionWrapper>
    <template #title>
      <RectangleHeader>Wyniki ankiety</RectangleHeader>
    </template>
    <template #content>
      <div class="flex flex-col lg:flex-row justify-around align-middle items-center w-full my-8">
          <p class="p-8 text-2xl block lg:hidden">Myślisz że depresja nie jest problemem? Też nie zdawaliśmy sobie sprawy z powagi sytuacji, dopóki nie przeprowadziliśmy ankiety wśród naszych rówieśników. Na sto zapytanych osób 74 wypowiedziało się że zna kogoś ze stadium depresji.</p>
          <img src="~/assets/img/charts/stats_chart1.svg" alt="">
          <p class="p-8 text-2xl hidden lg:block">Myślisz że depresja nie jest problemem? Też nie zdawaliśmy sobie sprawy z powagi sytuacji, dopóki nie przeprowadziliśmy ankiety wśród naszych rówieśników. Na sto zapytanych osób 74 wypowiedziało się że zna kogoś ze stadium depresji.</p>
      </div>
      <div class="flex flex-col lg:flex-row justify-around align-middle items-center w-full my-8">
          <p class="p-8 text-2xl block lg:block">Płeć ankietowanych </p>
          <img src="~/assets/img/charts/stats_chart2.svg" alt="">
          <p class="p-8 text-2xl hidden lg:hidden">Płeć ankietowanych </p>
      </div>
      <div class="flex flex-col lg:flex-row justify-around align-middle items-center w-full my-8">
          <p class="p-8 text-2xl block lg:hidden">Ankietowanych podzieliliśmy na 3 grupy wiekowe: mniej niż 15 lat, od 15 do 20 lat, oraz powyżej 20 lat. Prztłaczająca większość respondentów jest w wieku od 15 do 20 lat.</p>
          <img src="~/assets/img/charts/stats_chart3.svg" alt="">
          <p class="p-8 text-2xl hidden lg:block">Ankietowanych podzieliliśmy na 3 grupy wiekowe: mniej niż 15 lat, od 15 do 20 lat, oraz powyżej 20 lat. Prztłaczająca większość respondentów jest w wieku od 15 do 20 lat.</p>
      </div>
    </template>
  </SectionWrapper>
</template>
