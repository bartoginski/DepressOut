<template>
  <footer class="bg-primary text-white pt-16 relative">
    <div class="relative">
      <div class="container">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col gap-4">
            <img src="~/assets/img/logo.svg" alt="" />
            <a class="hover:opacity-90 transition-opacity" :href="'mailto' + email">{{ email }}</a>
          </div>
          <ul
            class="
              flex flex-col
              items-start
              md:flex-row
              md:justify-between
              md:items-center
              max-w-2xl
              gap-2
              md:gap-36
            "
          >
            <li class="">
              <NuxtLink class="menu__link" to="/depression">Depresja</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class="menu__link" to="/blog">Blog</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class="menu__link" to="/contact">Kontakt</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-row gap-4 pt-4 pb-12">
          <!--TODO: ADD LINKS -->
          <a class="social__icon" href="">
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
          <a class="social__icon" href="">
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
          <a class="social__icon" href="">
            <svg
              width="35"
              height="29"
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 3.43205C33.7098 4.01611 32.3268 4.40827 30.8729 4.58627C32.3568 3.67958 33.497 2.24446 34.0316 0.53678C32.6459 1.37393 31.1047 1.98302 29.4708 2.31121C28.1615 0.887216 26.2957 0 24.2308 0C20.2646 0 17.0486 3.2763 17.0486 7.32023C17.0486 7.89316 17.114 8.45219 17.2368 8.98897C11.2684 8.68303 5.97927 5.76829 2.4359 1.33778C1.81669 2.42246 1.46481 3.67958 1.46481 5.02014C1.46481 7.55941 2.7305 9.80109 4.65903 11.1166C3.48063 11.0777 2.37316 10.7467 1.4048 10.1988C1.4048 10.2294 1.4048 10.26 1.4048 10.2906C1.4048 13.8395 3.88161 16.7959 7.16312 17.4718C6.56301 17.6386 5.92744 17.7276 5.27278 17.7276C4.80906 17.7276 4.35897 17.6831 3.9198 17.5941C4.83633 20.5005 7.48773 22.6226 10.6274 22.681C8.17239 24.6446 5.07638 25.8127 1.71031 25.8127C1.1293 25.8127 0.559193 25.7793 0 25.7098C3.17512 27.7902 6.95035 29 11.0065 29C24.2144 29 31.4375 17.8444 31.4375 8.17129C31.4375 7.85422 31.4294 7.53438 31.4184 7.22288C32.8205 6.19104 34.0371 4.90055 35 3.43205Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="bg-dark-gray py-4 sm:py-6">
      <div class="container flex justify-center sm:justify-between my-10 flex-wrap gap-4 sm:gap-0 ">
        <span>Copyright © 2021</span>
        <span>Działamy dla dobra innych</span>
        <span class="cursor-pointer ">Prywatność</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: 'email.projektu@o2.pl'
    }
  }
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
    &__link {
    @apply text-xl sm:text-2xl cursor-pointer hover:opacity-80 transition-opacity;
    }
  }
}
</style>


