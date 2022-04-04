<template>
  <div class="container mt-24">
    <div
      class="text-white bg-primary px-14 py-8 rounded-2xl flex md:flex-row flex-col md:gap-24 gap-8 justify-center md:justify-between relative overflow-hidden"
    >
      <img
        src="~/assets/img/CTA_male.svg"
        alt=""
        class="absolute z-0 -left-1/4 -top-1/4 sm:-left-4 sm:-top-6"
      />
      <img
        src="~/assets/img/CTA_duze.svg"
        alt=""
        class="absolute z-0 -right-2 -bottom-10"
      />
      <div class="flex flex-col gap-10 z-10 text-center md:text-left">
        <h2 class="text-4xl font-bold text-center md:text-left">Jak pomóc ukrainie?</h2>
        <div class="text-xl justify-left">
          <p>
            Chcesz wpłacić pieniądze na pomoc Ukrainie?
          </p>
          <p>
            Sprawdź zweryfikowaną zbiórkę.
          </p>
        </div>
      </div>
      <div class="flex justify-center items-center text-xl z-0">
        <a href="https://pck.pl/na-pomoc-ukrainie/">
          <ButtonOutlineWhite
            class="border-white bg-transparent px-14 lg:mr-14 lg:w-72"
            >Sprawdź</ButtonOutlineWhite
          >
        </a>
      </div>
    </div>
  </div>
</template>
