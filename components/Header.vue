<template>
  <header class = 'bg-white text-black py-4'>
        <div class = 'container flex  justify-between px-4 font-bold'>
        <img src="~/assets/img/logo.svg" alt="logo" />
        <ul class='flex flex-col
              items-start
              md:flex-row
              md:justify-between
              md:items-center
              max-w-2xl
              gap-2
              md:gap-36'>
        
            <li class="ml-7 text-2xl">
                <NuxtLink class="no-underline menu__link" to="/depression">Depresja</NuxtLink>
            </li>
            <li class="ml-7 text-2xl">
                <NuxtLink class="no-underline menu__link" to="/blog">Blog</NuxtLink>
            </li>
            <li class="ml-7 text-2xl">
                <NuxtLink class="no-underline menu__link" to="/login">Zaloguj</NuxtLink>
            </li>
        </ul>
        </div>
  </header>
</template>
