<template>
  <footer class="bg-primary text-white pt-16">
    <div class="container">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col gap-4">
            <img src="~/assets/img/logo.svg" alt="" />
            <span>email.projektu@o2.pl</span>
        </div>
        <ul class="flex flex-col md:flex-row justify-between items-center max-w-2xl gap-4 md:gap-36 ">
          <li class="text-2xl">
            <NuxtLink to="/depresja">Depresja</NuxtLink>
          </li>
          <li class="text-2xl">
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li class="text-2xl">
            <NuxtLink to="/kontat">Kontat</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-dark">
        <div class="container flex justify-between my-10">
            <span>Copyright © 2021</span>
            <span>Działamy dla dobra innych</span>
            <span>Prywatność</span>
        </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
