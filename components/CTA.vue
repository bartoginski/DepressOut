<template>
  <div class="container mt-24">
    <div
      class="text-white bg-primary px-14 py-8 rounded-2xl flex md:flex-row flex-col md:gap-24 gap-8 justify-center md:justify-between relative overflow-hidden"
    >
      <div
        class="h-32 w-32 absolute -top-8 -left-8 rounded-full bg-primary-light"
      ></div>
      <div
        class="h-96 w-96 absolute -bot-8 -right-8 rounded-full bg-primary-light"
      ></div>

      <div class="flex flex-col gap-10 z-10 text-center md:text-left">
        <h2 class="text-4xl font-bold">Jesteśmy tu, żeby pomóc</h2>
        <div class="text-xl justify-left">
          <p>Potrzebujesz pomocy, a nie wiesz gdzie jej szukać?</p>
          <p>Sprawdź nasze telefony zaufania</p>
        </div>
      </div>
      <div class="flex justify-center items-center text-xl z-0">
        <NuxtLink to="/phones">
          <ButtonOutlineWhite
            class="border-white bg-transparent px-14 lg:mr-14 lg:w-72"
            >Sprawdź</ButtonOutlineWhite
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
