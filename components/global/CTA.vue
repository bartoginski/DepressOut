<template>
  <div
    class="
      md:px-12 md:py-10 md:my-40
      py-4
      px-6
      my-20
      mx-auto
      text-white
      bg-primary
      rounded-2xl
      md:max-w-max
      w-3/4
      flex
      md:flex-row
      flex-col
      md:gap-24
      gap-8
      align-middle
      justify-center
      relative
      overflow-hidden
      before:absolute before:w-20 before:h-20 before:bg-white before:top-0
    "
  >
    <img
      src="~/assets/img/koloo.svg"
      alt=""
      class="absolute z-0 -left-1 -top-2"
    />
    <img
      src="~/assets/img/kolo.svg"
      alt=""
      class="absolute z-0 -right-2 -bottom-10"
    />
    <div class="flex flex-col gap-10 z-10">
      <h2 class="text-4xl font-bold">Jesteśmy tu, żeby pomóc</h2>
      <div class="text-xl justify-left">
        <p>Potrzebujesz pomocy, a nie wiesz gdzie jej szukać?</p>
        <p>Sprawdź nasze telefony zaufania</p>
      </div>
    </div>
    <div class="py-10 px-20 text-xl z-0">
      <ButtonPrimary class="border-white bg-transparent px-14"
        >Sprawdź</ButtonPrimary
      >
    </div>
  </div>
</template>