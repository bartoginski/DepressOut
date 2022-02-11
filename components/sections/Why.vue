<template>
  <SectionWrapperColumns>
    <template #title>
      <RectangleHeader>Skąd pomysł?</RectangleHeader>
    </template>
    <template #col-left>
      <p class="flex flex-col justify-center items-center">
        Według ankiety, którą przeprowadziliśmy, aż 75% ankietowanych zna osobę
        dotkniętą depresją, z czego aż 94% ankietowanych to osoby w wieku 15-20
        lat. Co więcej, 66,1% osób biorących udział w ankiecie odczuwa depresję
        lub podejrzewa ją u siebie. Ankieta została przeprowadzona wśród ponad
        100 osób.
        <img class="md:hidden my-6 w-1/2" src="~/assets/img/sections/what_and_how1.svg">
        Te wyniki pokazały nam, jak ważnym i aktualnym problemem jest depresja i
        że należy podjąć odpowiednie kroki, by pomóc ludziom dotkniętym tą
        chorobą.
      </p>
    </template>
    <template #col-right>
      <img
        class="hidden md:block"
        src="~/assets/img/sections/why_created.svg"
        alt=""
      />
    </template>
  </SectionWrapperColumns>
</template>
