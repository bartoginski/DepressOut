<template>
  <SectionWrapperColumns :reverse="true">
    <template #col-left>
      <img class="" src="~/assets/img/sections/help.svg" alt="" />
    </template>
    <template #col-right>
      <RectangleHeader>Nasz projekt</RectangleHeader>
      <p class="text-white">
        Tworzymy projekt mający na celu pomóc ludziom dotkniętym depresją.
        Dlatego stworzyliśmy ankietę by lepiej zrozumieć problem. Dziękujemy za
        poświęcony czas.
      </p>
    </template>
  </SectionWrapperColumns>
</template>
