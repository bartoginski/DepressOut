<template>
  <SectionWrapper>
    <template #title>
      <RectangleHeader>Wyniki ankiety</RectangleHeader>
    </template>
    <template #content>
      <SectionWrapperColumns>
        <template #col-left>
              <p>
              Myślisz, że depresja nie jest problemem? Też nie zdawaliśmy sobie sprawy z powagi sytuacji, dopóki nie przeprowadziliśmy ankiety wśród naszych rówieśników. Na sto zapytanych osób 74 wypowiedziało się że zna kogoś ze stadium depresji.
              </p>
        </template>
        <template #col-right>
              <img src="~/assets/img/charts/stats_chart1.svg" alt="" />
        </template>
      </SectionWrapperColumns>
      <SectionWrapperColumns :reverse="true">
        <template #col-left>
              <img src="~/assets/img/charts/stats_chart2.svg" alt="" />
        </template>
        <template #col-right>
              <p>
                Płeć ankietowanych
              </p>
        </template>
      </SectionWrapperColumns>
      <SectionWrapperColumns>
        <template #col-left>
              <p>
                Ankietowanych podzieliliśmy na 3 grupy wiekowe: mniej niż 15 lat, od 15 do 20 lat, oraz powyżej 20 lat. 
                Prztłaczająca większość respondentów jest w wieku od 15 do 20 lat.
              </p>
        </template>
        <template #col-right>
          <img class="w-3/5 md:w-2/5" src="~/assets/img/charts/stats_chart3.svg" alt="" />
        </template>
      </SectionWrapperColumns>
    </template>
  </SectionWrapper>
</template>
