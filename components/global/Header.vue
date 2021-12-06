<template>
  <header class="bg-white text-black py-4 fixed top-0 w-full z-50">
    <div class="container flex justify-between px-4 font-bold">
      <Nuxt-link to="/" class="flex">
        <img src="~/assets/img/logo_black.svg" alt="logo"
      /></Nuxt-link>
      <div class="block md:hidden">
        <label for="check">
          <input id="check" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

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

label {
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
}

label span {
  background: black;
  border-radius: 10px;
  height: 7px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
  width: 50%;
}

span:nth-of-type(2) {
  width: 100%;
}

span:nth-of-type(3) {
  width: 75%;
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox']:checked ~ span:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotatez(45deg) translate(8px, 0px);
}

input[type='checkbox']:checked ~ span:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg);
}

input[type='checkbox']:checked ~ span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(30px, -11px) rotatez(45deg);
}
</style>
