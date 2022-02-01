<template>
  <footer class="bg-primary text-white relative">
    <div class="relative py-16 flex">
      <div
        class="container flex flex-col sm:flex-row justify-between"
      >
        <div class="mb-8 sm:mb-0 ">
          <div class="flex flex-row sm:flex-col gap-4 justify-between">
            <div class="flex flex-col gap-4">
              <Nuxt-link to="/"
                ><img
                  src="~/assets/img/logo_white.svg"
                  alt=""
                  class="w-32 md:w-40"
              /></Nuxt-link>
              <a
                class="hover:opacity-90 transition-opacity text-lg"
                :href="'mailto:' + email"
                >{{ email }}</a
              >
            </div>
            <div class="flex flex-row gap-4 py-4 sm:py-0">
              <a
                class="social__icon social__facebook"
                href="https://www.facebook.com/DepressOut-102231069004407"
              >
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0C6.49205 0 0 6.75043 0 15.0771C0 22.6362 5.35511 28.8774 12.3329 29.9678V19.0732H8.74548V15.11H12.3329V12.4729C12.3329 8.10668 14.3787 6.18983 17.8686 6.18983C19.5401 6.18983 20.4239 6.31867 20.8424 6.37761V9.83712H18.4618C16.9802 9.83712 16.4628 11.2975 16.4628 12.9437V15.11H20.8049L20.2156 19.0732H16.4628V30C23.5401 29.0015 29 22.7095 29 15.0771C29 6.75043 22.508 0 14.5 0Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                class="social__icon social__insta"
                href="https://www.instagram.com/depressout.pl/"
              >
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.05556 0C3.60728 0 0 3.73167 0 8.33333V21.6667C0 26.2683 3.60728 30 8.05556 30H20.9444C25.3927 30 29 26.2683 29 21.6667V8.33333C29 3.73167 25.3927 0 20.9444 0H8.05556ZM24.1667 3.33333C25.056 3.33333 25.7778 4.08 25.7778 5C25.7778 5.92 25.056 6.66667 24.1667 6.66667C23.2773 6.66667 22.5556 5.92 22.5556 5C22.5556 4.08 23.2773 3.33333 24.1667 3.33333ZM14.5 6.66667C18.9483 6.66667 22.5556 10.3983 22.5556 15C22.5556 19.6017 18.9483 23.3333 14.5 23.3333C10.0517 23.3333 6.44444 19.6017 6.44444 15C6.44444 10.3983 10.0517 6.66667 14.5 6.66667ZM14.5 10C13.2181 10 11.9887 10.5268 11.0823 11.4645C10.1759 12.4021 9.66667 13.6739 9.66667 15C9.66667 16.3261 10.1759 17.5979 11.0823 18.5355C11.9887 19.4732 13.2181 20 14.5 20C15.7819 20 17.0113 19.4732 17.9177 18.5355C18.8241 17.5979 19.3333 16.3261 19.3333 15C19.3333 13.6739 18.8241 12.4021 17.9177 11.4645C17.0113 10.5268 15.7819 10 14.5 10Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-32 text-2xl">
          <ul class="menu">
            <li class="menu__link">
              <NuxtLink to="/depression">Depresja</NuxtLink>
            </li>
            <li class="menu__link">
              <NuxtLink to="/phones">Telefony Pomocy</NuxtLink>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__link">
              <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
            <li class="menu__link">
              <NuxtLink to="/what">Co i jak?</NuxtLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="bg-dark-gray py-4 sm:py-2">
      <div
        class="container flex justify-center sm:justify-between my-4 flex-wrap gap-4 sm:gap-0"
      >
        <span>Copyright © 2021</span>
        <span>Działamy dla dobra innych</span>
        <span class="cursor-pointer">Prywatność</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: 'kontakt.depressout@gmail.com',
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  .social {
    &__icon {
      @apply cursor-pointer hover:opacity-80 transition-opacity;
    }
  }
  .menu {
    &:first-child {
      @apply md:font-black;
    }

    &__link {
      @apply text-xl sm:text-2xl cursor-pointer hover:opacity-80 transition-opacity mb-4 font-extralight;
    }
  }
}
</style>
