<template>
  <main class="">
    <div class="container grid grid-cols-1 md:grid-cols-2">
      <section class="border-black  md:border p-4 sm:py-12 sm:pb-40 sm:px-16">
        <div class="pb-10">
          <h3 class="text-4xl">Zaloguj się</h3>
          <p class="text-base text-light-gray">Zaloguj się i pomóż sobie</p>
        </div>
        <form class="flex flex-col justify-center" method="post">
          <label class="flex flex-col font-bold"
            >Email
            <input
              type="email"
              name="email"
              placeholder="np. email.projektu@o2.pl"
            />
          </label>
          <label class="flex flex-col font-bold"
            >Hasło
            <input
              type="password"
              name="password"
              placeholder="min. 6 znaków"
            />
          </label>
          <div class="mb-16 flex justify-between">
            <label class="pl-4 font-bold" for="">
              <input type="checkbox" class="mb-0" />
              Zapamiętaj mnie 
            </label>
            <Nuxt-link to="/reset-password" class="text-primary"
              >Nie pamiętasz hasła?</Nuxt-link
            >
          </div>
          <input
            class="text-2xl bg-primary text-white border-none"
            type="submit"
            value="Zaloguj się"
            @click="login"
          />

          <p>
            Nie masz konta?
            <Nuxt-link to="/register" class="text-primary"
              >Zarejestruj się</Nuxt-link
            >
          </p>
        </form>
      </section>

      <section class="bg-primary text-white border border-primary py-8 px-10 md:py-12 md:px-14 relative z-10">
        <h3 class="text-4xl text-center pb-12">Zaloguj się i dołącz do nas!</h3>
        <img src="~/assets/img/login_svg.svg" alt="">
        <p class="text-xl font-bold mt-20">
          Dołącz do ciągle powiększającej się społeczności i pomóż sobie z
          pomocą naszych narzędzi i opcji pomocy
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    login(e) {
      e.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  @apply border-gray-500 placeholder-light-gray border px-5 py-4 rounded-full relative mb-10 md:max-w-lg;
}
</style>
