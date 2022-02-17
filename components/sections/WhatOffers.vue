<template>
  <SectionWrapperColumns>
    <template #title>
      <RectangleHeader>Co oferujemy?</RectangleHeader>
    </template>
    <template #col-left>
      <img
        class="hidden md:block"
        src="~/assets/img/sections/what_offers.svg"
        alt=""
      />
    </template>
    <template #col-right>
      <p class="flex flex-col justify-center items-center">
        Nasz projekt ma na celu pomoc ludziom dotkniętym depresją. W związku z
        tym stworzyliśmy stronę interentową oraz aplikację, gdzie użytkownicy
        mogą dowiedzieć się wielu informacji na temat depresji, skorzystać z
        bazy numerów do specjalistów i numerów pomocy, śledzić bloga o tematyce
        depresji.
        <img
          class="md:hidden my-6 w-1/2"
          src="~/assets/img/sections/what_and_how2.svg"
          alt=""
        />
        Wszystkie te elementy zostały stworzone w oparciu o dostępne informacje
        na temat depresji i pomoc specjalistów w tej dziedzinie, dzięki czemu
        mamy pewność, że działamy w dobrym kierunku.
      </p>
    </template>
  </SectionWrapperColumns>
</template>
