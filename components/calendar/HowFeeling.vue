<template>
  <section class="container w-max">
    <div class="bg-primary text-black rounded-2xl mt-20">
      <div class="text-white text-3xl p-8 px-12">
        <p>Jak się dziś czujesz?</p>
      </div>
      <div class="flex items-center justify-center gap-8 p-5 flex-row">
        <ButtonWhite
          class="bg-white p-3 w-1/2 flex flex-col items-center gap-4 justify-center text-2xl text-primary font-black hover:text-black hover:bg-white hover:shadow-lg"
        >
          <GreatMood />
          <p>Świetnie</p>
        </ButtonWhite>
        <ButtonWhite
          class="bg-white p-3 w-1/2 flex flex-col items-center gap-4 justify-center text-2xl text-primary font-black hover:text-black hover:bg-white hover:shadow-lg"
        >
          <GoodMood />
          <p>Dobrze</p>
        </ButtonWhite>
      </div>
      <div class="flex items-center justify-center gap-8 p-5 flex-row">
        <ButtonWhite
          class="bg-white p-3 w-1/2 flex flex-col items-center gap-4 justify-center text-2xl text-primary font-black hover:text-black hover:bg-white hover:shadow-lg"
        >
          <OkMood />
          <p>Tak sobie</p>
        </ButtonWhite>
        <ButtonWhite
          class="bg-white p-3 w-1/2 flex flex-col items-center gap-4 justify-center text-2xl text-primary font-black hover:text-black hover:bg-white hover:shadow-lg"
        >
          <SadMood />
          <p>Źle</p>
        </ButtonWhite>
      </div>
      <div class="flex items-center justify-center gap-8 p-5 flex-row">
        <ButtonWhite
          class="bg-white p-3 w-1/2 flex flex-col items-center gap-4 justify-center text-2xl text-primary font-black hover:text-black hover:bg-white hover:shadow-lg"
        >
          <TerribleMood />
          <p>Tragicznie</p>
        </ButtonWhite>
      </div>
    </div>
  </section>
</template>
