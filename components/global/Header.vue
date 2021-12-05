<template>
  <header class="bg-white text-black py-4">
    <div class="container flex justify-between px-4 font-bold">
     <Nuxt-link to="/"> <img src="~/assets/img/logo_black.svg" alt="logo" /></Nuxt-link>
      <img class="block md:hidden" src="~/assets/img/burger.svg" alt="burger menu" />

      <ul
        class="
          flex-col
          items-start
          md:flex-row md:justify-between md:items-center
          max-w-2xl
          gap-2
          md:gap-36
          hidden
          md:flex
        "
      >
        <li class="ml-7 text-2xl transition-colors">
          <NuxtLink class="menu__link" to="/depression">Depresja</NuxtLink>
        </li>
        <li class="ml-7 text-2xl">
          <NuxtLink class="menu__link" to="/blog">Blog</NuxtLink>
        </li>
        <li class="ml-7 text-2xl transition-colors">
          <NuxtLink class="menu__link" to="/login">Zaloguj</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.menu {
  &__link {
    @apply text-xl sm:text-2xl cursor-pointer hover:text-primary transition-colors;
  }
}
</style>
