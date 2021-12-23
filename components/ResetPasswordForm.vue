<template>
  <main class="">
    <div class="bg-primary flex flex-col w-2/4 p-20 mx-auto my-4 text-center justify-center text-white">
        <p class="text-4xl mb-4">Nie pamiętasz hasła?</p>
        <p>Podaj adres e-mail użyty podczas zakładania konta, </p>
        <p>a prześlemy Ci łącze umożliwiające zresetowanie hasła.</p>

        <form class="flex flex-col justify-center mt-10 px-2" method="post">
          <label class="flex flex-col font-bold">Email / Nazwa użytkownika
            <input type="username" name="username" placeholder="np. Ogi_koxPL" />
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
            value="Wyślij"
            @click="send" />

        </form>

        <img src="~/assets/img/reset_psswd.svg" alt="">
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
  @apply border-gray-500 placeholder-light-gray border px-3 py-3 rounded-full relative mb-8 md:max-w-lg text-black;
}
</style>