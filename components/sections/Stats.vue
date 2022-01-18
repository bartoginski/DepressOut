<template>
  <SectionWrapper>
    <template #title>
      <RectangleHeader>Wyniki ankiety</RectangleHeader>
    </template>
    <template #content>
      <SectionWrapperColumns>
        <template #col-left>
          <div
            class="flex flex-col items-center justify-center text-center py-6"
          >
            <div
              class="flex flex-col md:flex-row justify-around align-middle items-center w-full my-8"
            >
              <p class="p-8 text-2xl block md:hidden">
                Myślisz, że depresja nie jest problemem? Też nie zdawaliśmy sobie
                sprawy z powagi sytuacji, dopóki nie przeprowadziliśmy ankiety
                wśród naszych rówieśników. Na sto zapytanych osób 74
                wypowiedziało się że zna kogoś ze stadium depresji.
              </p>
              <img src="~/assets/img/charts/stats_chart1.svg" alt="" />
            </div>
          </div>
        </template>

        <template #col-right>
          <div
            class="flex flex-col items-center justify-center text-center py-6"
          >
            <p class="p-8 text-2xl hidden md:block">
              Myślisz, że depresja nie jest problemem? Też nie zdawaliśmy sobie
              sprawy z powagi sytuacji, dopóki nie przeprowadziliśmy ankiety
              wśród naszych rówieśników. Na sto zapytanych osób 74 wypowiedziało
              się że zna kogoś ze stadium depresji.
            </p>
          </div>
        </template>
      </SectionWrapperColumns>
      <SectionWrapperColumns>
        <template #col-right>
          <div
            class="flex flex-col items-center justify-center text-center py-6"
          >
            <div
              class="flex flex-col md:flex-row justify-around align-middle items-center w-full my-8"
            >
              <p class="p-8 text-2xl block md:hidden">Płeć ankietowanych</p>
              <img src="~/assets/img/charts/stats_chart2.svg" alt="" />
            </div>
          </div>
        </template>

        <template #col-left>
          <div
            class="flex flex-col items-center justify-center text-center py-6"
          >
            <p class="p-8 text-2xl hidden md:block">Płeć ankietowanych</p>
          </div>
        </template>
      </SectionWrapperColumns>
      <SectionWrapperColumns>
        <template #col-left>
          <div
            class="flex flex-col items-center justify-center text-center py-6"
          >
            <div
              class="flex flex-col md:flex-row justify-around align-middle items-center w-full my-8"
            >
              <p class="p-8 text-2xl block md:hidden">
                Ankietowanych podzieliliśmy na 3 grupy wiekowe: mniej niż 15
                lat, od 15 do 20 lat, oraz powyżej 20 lat. Przytłaczająca
                większość respondentów jest w wieku od 15 do 20 lat.
              </p>
              <img src="~/assets/img/charts/stats_chart3.svg" alt="" />
            </div>
          </div>
        </template>

        <template #col-right>
          <div
            class="flex flex-col items-center justify-center text-center py-6"
          >
            <p class="p-8 text-2xl hidden md:block">
              Ankietowanych podzieliliśmy na 3 grupy wiekowe: mniej niż 15 lat,
              od 15 do 20 lat, oraz powyżej 20 lat. Prztyłaczająca większość
              respondentów jest w wieku od 15 do 20 lat.
            </p>
          </div>
        </template>
      </SectionWrapperColumns>
    </template>
  </SectionWrapper>
</template>
