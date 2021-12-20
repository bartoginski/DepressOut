<template>
  <main class="">
    <div class="container grid grid-cols-1 md:grid-cols-2">
      <div class="bg-primary p-12 sm:py-12 sm:pb-16 sm:px-16 font-extrabold text-white">
        <div class="pb-8">
          <h1 class="text-4xl">Zarejestruj się</h1>
          <p class="text-base">Dołącz do naszej społeczności</p>
        </div>
        <form class="flex flex-col justify-center" method="post">
          <label class="flex flex-col font-bold">Nazwa użytkownika
            <input type="username" name="username" placeholder="np. Ogi_koxPL" />
          </label>

          <label class="flex flex-col font-bold">Email
            <input type="email" name="email" placeholder="np. ninjago2137@o2.pl" />
          </label>

          <label class="flex flex-col font-bold">Hasło
            <input type="password" name="password" placeholder="min. 6 znaków" />
          </label>

          <label class="flex flex-col font-bold">Powtórz hasło
            <input type="password" name="password" placeholder="" />
          </label>
          
          <input
            class="
            text-2xl 
            bg-white 
            text-black 
            border-none 
            py-4 
            transition 
            duration-500 
            ease-in-out 
            hover:bg-gray-900 
            hover:text-primary"
            type="submit"
            value="Zarejestruj się"
            @click="register" />

          <p class="text-white">
              Masz już konto? <Nuxt-link to="/login" class="text-black font-extrabold">Zaloguj się</Nuxt-link>
          </p>
        </form>
      </div>

      <div class="
      bg-white 
      text-black 
      border-2 
      border-gray-300 
      md:border-l-0 
      py-8 
      px-10 
      md:py-12 
      md:px-14 
      relative 
      ">
        <h1 class="
        text-3xl 
        text-center 
        pb-12 
        font-extrabold">Zarejestruj się i dołącz do nas!</h1>
        <img src="~/assets/img/reg_happy.svg" alt="">
        <p class="
        text-xl 
        font-bold 
        mt-20">
          Dołącz do ciągle powiększającej się społeczności 
          i pomóż sobie z pomocą naszych narzędzi i opcji
          pomocy
        </p>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            register(e) {
                e.preventDefault();
            }
        }
    }
</script>

<style lang="scss" scoped>
input {
  @apply border-gray-500 placeholder-light-gray border px-5 py-4 rounded-full relative mb-8 md:max-w-lg text-black;
}
</style>